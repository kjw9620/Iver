from rest_framework import serializers
from .models import Clothes

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clothes
        fields = "__all__"