from rest_framework import serializers
from django.contrib.auth.models import User
from .models import WikiDocument

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class WikiDocumentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = WikiDocument
        fields = '__all__'