from django.db import models
from django.contrib.auth.models import User

class WikiDocument(models.Model):
    image=models.ImageField(verbose_name='image',null=True,blank=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
