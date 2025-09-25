from rest_framework import serializers
from .models import Job
from django.utils import timezone


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['title' , 'company', 'location','posting_date'] #use '__all__' for validating all fields

        def validate_posting_date(self,val):
            if val > timezone.now().date():
                raise serializers.ValidationError('posting date cannot be in future')
            return val
        #def validate(), function can validate the entire object instead of only field validation which means all values of the object will be available for checking in it


