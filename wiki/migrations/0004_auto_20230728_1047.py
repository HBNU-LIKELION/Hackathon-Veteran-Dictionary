# Generated by Django 3.2.20 on 2023-07-28 01:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wiki', '0003_wikidocument_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wikidocument',
            name='author',
        ),
        migrations.RemoveField(
            model_name='wikidocument',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='wikidocument',
            name='updated_at',
        ),
        migrations.AlterField(
            model_name='wikidocument',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='wiki_images/', verbose_name='image'),
        ),
    ]
