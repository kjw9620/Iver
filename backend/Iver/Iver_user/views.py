from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User
from django.contrib.auth.hashers import make_password, check_password
# Create your views here.

def register(request):
    if request.method == "POST":
        username = request.POST.get('username', None)
        useremail = request.POST.get('useremail', None)
        password = request.POST.get('password', None)


        user = User(
            username=username,
            useremail=useremail,
            password=make_password(password)
        )

        user.save()

        
        

def login(request):
    if request.method == "POST":
        pass
    
    elif request.method == "GET":
        pass