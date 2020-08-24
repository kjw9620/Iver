from django.db import models

# Create your models here.
class Clothes(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=128, verbose_name="옷이름")
    brand_name = models.CharField(max_length=64, verbose_name="브랜드이름")
    price = models.IntegerField()
    #image = models.ImageField()
    categories = models.IntegerField(verbose_name="분류번호")
    buy_count = models.IntegerField()
    color = models.CharField(max_length=128, verbose_name="옷색깔")
    size = models.CharField(max_length=128, verbose_name="옷사이즈")
    register_dttm = models.DateTimeField(auto_now_add=True, verbose_name="등록시간")

    def __str__(self):
        return self.name

    class Meta:
        db_table = "Iver_clothes"   
        verbose_name = "Clothes"
        verbose_name_plural = "Clothes"