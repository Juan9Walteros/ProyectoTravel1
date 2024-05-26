from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
     class Meta:
          model = User
          fields = ['id', 'username', 'email', 'last_name', 'password', 'is_active', 'is_staff']
