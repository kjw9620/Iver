# Generated by Django 3.1 on 2020-08-18 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Brand', '0002_auto_20200818_1414'),
    ]

    operations = [
        migrations.AlterField(
            model_name='clothes',
            name='categories',
            field=models.CharField(max_length=32, verbose_name='옷종류 '),
        ),
    ]
