from django.db import models


def blog_thumbnail_directory(instance, filename):
    return'blog/{0}/{1}'
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='blog')
