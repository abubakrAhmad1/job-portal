import django_filters
from .models import Job

class JobFilter(django_filters.FilterSet):
    class Meta:
        model = Job
        fields = {
            'job_type': ['exact'],           # ?job_type=Full-time
            'location': ['exact', 'icontains'],  # ?location=London (exact or partial)
            'tags': ['icontains'],           # ?tag=Pricing
        }
