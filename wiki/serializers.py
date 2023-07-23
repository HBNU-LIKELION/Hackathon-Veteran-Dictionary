from rest_framework import serializers
from .models import WikiDocument

class WikiDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WikiDocument
        fields = '__all__'
