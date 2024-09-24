
from django.contrib import admin
from django.urls import path, include
from database import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('xPharma/', include('xPharma.urls')),
    path('database/', views.all_products) #creo rotta per applicazione di backend
]
