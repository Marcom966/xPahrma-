from django.urls import path
from . import views

#inutile
urlpatterns = [
    path('hello/', views.say_hello)
]