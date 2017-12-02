import sys
import time
import traceback
import javascript

from browser import document as doc, window, alert

editor = window.ace.edit("ace0")  
currentState = window.getCodeState
consoleId = "console0"

if 'set_debug' in doc:
    __BRYTHON__.debug = int(doc['set_debug'].checked)

def reset_src():
    editor.setValue(currentState())
    editor.scrollToRow(0)
    editor.gotoLine(0)

class cOutput:

    def write(self, data):
        doc[consoleId].value += str(data)

    def flush(self):
        pass

if consoleId in doc:
    sys.stdout = cOutput()
    sys.stderr = cOutput()

def to_str(xx):
    return str(xx)

output = ''

def show_console(ev):
    doc[consoleId].value = output
    doc[consoleId].cols = 60

# load a Python script
def load_script(evt):
    _name = evt.target.value + '?foo=%s' % time.time()
    editor.setValue(open(_name).read())

# run a script, in global namespace if in_globals is True
def run(ev):
    global editor
    global output
    global consoleId
    editor = window.ace.edit(ev.target.getAttribute("aceid"))  
    consoleId = ev.target.getAttribute("consoleid")
    doc[consoleId].value = ''
    src = editor.getValue()

    t0 = time.perf_counter()
    try:
        ns = {'__name__':'__main__'}
        exec(src, ns)
        state = 1
    except Exception as exc:
        # traceback.print_exc(file=sys.stderr)
        print(exc)
        state = 0
    output = doc[consoleId].value
    print(consoleId)
    # print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0))
    return state

def returnValue():
    return editor.getValue()

def show_js(ev):
    src = editor.getValue()
    doc[consoleId].value = javascript.py2js(src, '__main__')

reset_src()
