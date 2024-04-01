from django.urls import path
from . import views

urlpatterns = [
    path('xPharma/hello', views.say_hello)
]