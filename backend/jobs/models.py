from django.db import models

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=255,null=True, blank=True)
    company = models.CharField(max_length=255,null=True, blank=True)
    location = models.CharField(max_length=255,null=True, blank=True)
    posting_date = models.DateField(null=True, blank=True)
    job_type = models.CharField(max_length=50, default='Full-time',null=True, blank=True)
    tags = models.CharField(max_length=512, blank=True)  # comma-separated
    created_at = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True,null=True, blank=True)



