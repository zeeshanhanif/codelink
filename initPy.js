from browser import document as doc, window
from browser import html
import editor
doc['run2'].bind('click',editor.run)