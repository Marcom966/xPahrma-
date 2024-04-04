from rest_framework import serializers
from .models import Product

#classe di serializzazione prodotti
class ProductSerializer(serializers.ModelSerializer):
    #crea modello di prodotto
    class Meta:
        model = Product
        fields = ('name','image','uploaded_time','price','description','owner','availability')