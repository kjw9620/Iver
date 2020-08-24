from django.urls import path
from . import views

app_name = "Brand"
urlpatterns = [
    path('',views.IndexView.as_view(), name='index'),
    path('<int:number>/brand',views.Clothes_detail, name='clothes'),
    path('<int:kind>',views.Clothes_kind, name='kind')
]
