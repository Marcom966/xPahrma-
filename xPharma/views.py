from django.shortcuts import render
from django.http import HttpResponse



#inutile
def say_hello(request):
    return render(request,'hello.html', {'name':'Marco'})
# Create your views here.
#it's like the service in Angular
