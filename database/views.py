from django.shortcuts import render
from .models import Product
from django.http import JsonResponse
from .serializers import ProductSerializer

def all_products(request):
    product_list = Product.objects.all()
    serializer = ProductSerializer(product_list, many=True)
    return JsonResponse(serializer.data, safe=False)
    #print(product_list)
# Create your views here
