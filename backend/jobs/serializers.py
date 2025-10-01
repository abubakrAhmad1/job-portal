from rest_framework import serializers
from .models import Job
from django.utils import timezone
from django.contrib.auth.models import User


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields  = ['title', 'company', 'location', 'posting_date']
    
    def validate_posting_date(self, val):
        if val > timezone.now().date():
            raise serializers.ValidationError('Posting date is in the Future')
        return val


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password' : {
                'write_only' : True
            }
        }
    def create(self, validated_data):
        # Hashes the password properly
        user = User.objects.create_user(**validated_data)
        return user
