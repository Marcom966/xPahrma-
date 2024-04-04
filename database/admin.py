from django.contrib import admin
from .models import Product


admin.site.register(Product) #Questa riga di codice serve a registrare i dati sul db admin (online) di django
