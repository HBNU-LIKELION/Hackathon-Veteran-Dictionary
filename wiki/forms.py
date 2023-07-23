# your_app_name/forms.py
from django import forms
from .models import WikiDocument

class WikiDocumentForm(forms.ModelForm):
    class Meta:
        model = WikiDocument
        fields = ['title', 'content']
