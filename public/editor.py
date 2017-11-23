import sys
import time
import traceback
import javascript

from browser import document as doc, window, alert

has_ace = True
editor = window.ace.edit("codeEditor")

if hasattr(window, 'localStorage'):
    from browser.local_storage import storage
else:
    storage = None

if 'set_debug' in doc:
    __BRYTHON__.debug = int(doc['set_debug'].checked)

def reset_src():
    if storage is not None and "py_src" in storage:
        editor.setValue(storage["py_src"])
    else:
        editor.setValue('for i in range(10):\n\tprint(i)')
    editor.scrollToRow(0)
    editor.gotoLine(0)

def reset_src_area():
    if storage and "py_src" in storage:
        editor.value = storage["py_src"]
    else:
        editor.value = 'for i in range(10):\n\tprint(i)'

class cOutput:

    def write(self, data):
        doc["console"].value += str(data)

    def flush(self):
        pass

if "console" in doc:
    sys.stdout = cOutput()
    sys.stderr = cOutput()

def to_str(xx):
    return str(xx)

output = ''

def show_console(ev):
    doc["console"].value = output
    doc["console"].cols = 60

# load a Python script
def load_script(evt):
    _name = evt.target.value + '?foo=%s' % time.time()
    editor.setValue(open(_name).read())

# run a script, in global namespace if in_globals is True
def run(*args):
    global output
    doc["console"].value = ''
    src = editor.getValue()
    if storage is not None:
       storage["py_src"] = src

    t0 = time.perf_counter()
    try:
        ns = {'__name__':'__main__'}
        exec(src, ns)
        state = 1
    except Exception as exc:
        # traceback.print_exc(file=sys.stderr)
        print(exc)
        state = 0
    output = doc["console"].value

    # print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0))
    return state

def returnValue():
    src = editor.getValue()
    if storage is not None:
        storage["py_src"] = src
    return editor.getValue()

def show_js(ev):
    src = editor.getValue()
    doc["console"].value = javascript.py2js(src, '__main__')


if has_ace:
    reset_src()
else:
    reset_src_area()
