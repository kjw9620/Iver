from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Clothes
import json
from django.views import View
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize

class IndexView(View):
    def get(self, request):
        clothes = Clothes.objects.all().order_by('-id')
        data = json.loads(serialize('json',clothes))
        return JsonResponse({'clothes' : data})

    def post(self, request):
        return HttpResponse('Post')

    def put(self, request):
        return HttpResponse('put')


    def delete(self, request):
        return HttpResponse('delete')


def Clothes_detail(request, number):
    clothes = Clothes.objects.get(categories=number)
    data = json.loads(serialize('json', clothes))
    return JsonResponse({'clothes' : data})

def Clothes_kind(request, kind):
    clothes = Clothes.objects.filter()
    data = json.loads(serialize('json', clothes))
            
    return HttpResponse(data)