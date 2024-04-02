from django.db import models

class Product(models.Model):
    name = models.CharField('Product Name', max_lenght=120)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
    uploaded_time = models.DateTimeField('Upload date')
    price = models.IntegerField('Price Field', max_lenght=4)
    description = models.CharField('product Name', max_lenght=120)
    owner=models.CharField('Owner Name', max_lenght=120)