from browser import document as doc, window
import editor

def setBinder(id):
    doc[id].bind('click',editor.run)

window.setBinder(setBinder)