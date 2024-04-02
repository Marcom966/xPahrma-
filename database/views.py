from django.shortcuts import render
from .models import Product

def all_products(request):
    if request.method=='GET':
        product_list = Product.objects.all()
    #print(product_list)
# Create your views here.
