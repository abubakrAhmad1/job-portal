from django.urls import path
from . import views

urlpatterns = [
    path('jobs/', views.job_list_create, name='job-list-create'),
    path('jobs/<int:pk>/', views.job_detail, name='job-detail'),
]
