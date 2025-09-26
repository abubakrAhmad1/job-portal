from rest_framework import serializers
from .models import Job
from django.utils import timezone

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields  = ['title', 'company', 'location', 'posting_date']
    
    def validate_posting_date(self, val):
        if val > timezone.now().date():
            raise serializers.ValidationError('Posting date is in the Future')
        return val
