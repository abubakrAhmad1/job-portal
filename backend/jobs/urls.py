from django.urls import path
from .views import JobListCreateView, JobDetailView,RegisterUserView

urlpatterns = [
    path('jobs/', JobListCreateView.as_view(), name='job-list-create'),
    path('jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
    path('register/',RegisterUserView.as_view(),name = 'user-register')
]

