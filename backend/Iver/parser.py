import requests
import json
import os 
import csv

os.environ.setdefault("DJANGO_SETTINGS_MODULE","Iver.settings")

import django
django.setup()

from Brand.models import Clothes

f = open('iver_brand_outer_jumper.csv','r', encoding='euc-kr')
reader = csv.reader(f)

cnt = 1
bulk_list = []
for row in reader:
    row[4] = row[4].replace(" ","")
    bulk_list.append(Clothes(
        name = row[0],
        brand_name = row[1],
        price = row[2],
        color_size = row[3],
        image = row[4],
        description = row[5],
        buy_count = cnt,
        categories = 202
    ))
    cnt += 1

Clothes.objects.bulk_create(bulk_list)

Clothes.objects.values()