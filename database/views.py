from django.shortcuts import render
from .models import Product
from django.http import JsonResponse
from .serializers import ProductSerializer


#funzione che serve a creare json con dati (che si può trovare a http://127.0.0.1:8000/database/)
def all_products(request):
    product_list = Product.objects.all() #'prende' tutti i prodotti da databse
    serializer = ProductSerializer(product_list, many=True) #li serializza
    return JsonResponse(serializer.data, safe=False) #ritorna file json con tutti i dati


    #print(product_list)
# Create your views here
