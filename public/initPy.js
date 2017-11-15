from browser import document as doc, window
from browser import html
import editor, editor2
doc['run2'].bind('click',editor2.run)