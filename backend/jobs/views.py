from django.shortcuts import render

# NOTE: HERE WE ARE JUST OVERRIDING THE RESPONSE STRUCTURE NOT THE DEFAULT FUNCTIONALITY OF THE APIS 

from rest_framework import generics, status, filters
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import Job
from .serializers import JobSerializer
from .filters import JobFilter
from django_filters.rest_framework import DjangoFilterBackend


class JobListCreateView(generics.ListCreateAPIView):
    """
    GET: List all jobs
    POST: Create a new job
    """
    queryset = Job.objects.all()
    
    serializer_class = JobSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = JobFilter
    search_fields = ['title', 'company']  # ?q=keyword
    ordering_fields = ['posting_date']
    ordering = ['-posting_date'] #if no query parameter will be given for sorting than by default it will send result by sorting it in descendidng order, and if the ordering parameter will be given than this one will be override

    def list(self, request, *args, **kwargs):
        """Return a standardized response for GET"""
        queryset = self.filter_queryset(self.get_queryset())  # ✅ This applies search, filters, and ordering

        serializer = self.get_serializer(queryset, many=True)
        return Response({
            "success": True,
            "count": len(serializer.data),
            "data": serializer.data
        }, status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        """Handle job creation with validation"""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({
            "success": True,
            "data": serializer.data
        }, status=status.HTTP_201_CREATED)


class JobDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a job by ID
    PUT/PATCH: Update a job
    DELETE: Delete a job
    """
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    def get_object(self):
        try:
            return super().get_object()
        except Exception:
            raise NotFound(detail="Job not found")

    def retrieve(self, request, *args, **kwargs):
        job = self.get_object()
        serializer = self.get_serializer(job)
        return Response({
            "success": True,
            "data": serializer.data
        }, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        job = self.get_object()
        serializer = self.get_serializer(job, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response({
            "success": True,
            "data": serializer.data
        }, status=status.HTTP_200_OK)

    def destroy(self, request, *args, **kwargs):
        job = self.get_object()
        self.perform_destroy(job)
        return Response({
            "success": True,
            "message": "Job deleted successfully"
        }, status=status.HTTP_204_NO_CONTENT)

