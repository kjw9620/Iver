# Generated by Django 3.1 on 2020-08-19 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Brand', '0007_remove_clothes_brandname'),
    ]

    operations = [
        migrations.AddField(
            model_name='clothes',
            name='brand_name',
            field=models.CharField(default=None, max_length=64, verbose_name='브랜드이름'),
            preserve_default=False,
        ),
    ]
