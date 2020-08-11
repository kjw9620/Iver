from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers
from oneLine import views

router = routers.DefaultRouter()
router.register('wisesaying', views.WiseSayingView, 'wisesaying')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]