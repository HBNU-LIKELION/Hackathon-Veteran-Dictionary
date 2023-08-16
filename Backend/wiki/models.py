from django.db import models
from django.contrib.auth.models import User

class WikiDocument(models.Model):
    image=models.URLField(verbose_name='image URL', null=True, blank=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    category=models.CharField(max_length=100)

    def __str__(self):
        return self.title
