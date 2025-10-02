from django.contrib import admin
from .models import Job

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'company', 'location')  # show these fields in the admin list
    search_fields = ('title', 'company','location')  # add search option
    list_filter = ('location',)  # add filter on sidebar

