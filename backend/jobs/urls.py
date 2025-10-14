from django.urls import path
from .views import JobListCreateView, JobDetailView,RegisterUserView ,CookieTokenObtainPairView,CookieTokenRefreshView,ProtectedView

urlpatterns = [
    path('jobs/', JobListCreateView.as_view(), name='job-list-create'),
    path('jobs/<int:pk>/', JobDetailView.as_view(), name='job-detail'),
    path('register/',RegisterUserView.as_view(),name = 'user-register'),
     path("token/", CookieTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", CookieTokenRefreshView.as_view(), name="token_refresh"),
    path("protected/", ProtectedView.as_view(), name="protected"),

]

