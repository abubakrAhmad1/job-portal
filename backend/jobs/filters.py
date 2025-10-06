import django_filters
from .models import Job

class JobFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name='title', lookup_expr='icontains')
    location = django_filters.CharFilter(field_name='location', lookup_expr='icontains')
    
    class Meta:
        model = Job
        fields = {
            'title' : ['icontains'],
            'job_type': ['exact'],           # ?job_type=Full-time
            'location': ['exact', 'icontains'],  # ?location=London (exact or partial)
            'tags': ['icontains'],           # ?tag=Pricing
        }
