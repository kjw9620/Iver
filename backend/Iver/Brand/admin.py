from django.contrib import admin
from .models import Clothes

class ClothesAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "categories", "buy_count", "color_size")

admin.site.register(Clothes, ClothesAdmin)