from django.shortcuts import render

# NOTE: HERE WE ARE JUST OVERRIDING THE RESPONSE STRUCTURE NOT THE DEFAULT FUNCTIONALITY OF THE APIS 

from rest_framework import generics, status, filters, permissions
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from .models import Job
from .serializers import JobSerializer
from .serializers import UserSerializer
from .filters import JobFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth.models import User


class JobListCreateView(generics.ListCreateAPIView):
    """
    GET: List all jobs
    POST: Create a new job
    """
    queryset = Job.objects.all()
    
    serializer_class = JobSerializer

    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = JobFilter
    search_fields = ['title', 'company']  # ?search=keyword
    ordering_fields = ['posting_date']
    ordering = ['-posting_date'] #if no query parameter will be given for sorting than by default it will send result by sorting it in descendidng order, and if the ordering parameter will be given than this one will be override
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    # permission_classes = [permissions.AllowAny]

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
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    

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

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


from django.http import HttpResponse
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
import time
from selenium.webdriver.support import expected_conditions as EC

def scrap(request):
    driver = webdriver.Chrome()
    driver.get("https://www.actuarylist.com/?search=software+engineer&page=1")
    driver.maximize_window()

    # 2. Wait for the popup to appear
    time.sleep(5)

    # 3. Try pressing the ESC key to close the popup
    try:
        ActionChains(driver).send_keys(Keys.ESCAPE).perform()
        time.sleep(0.5)
        print("Popup closed using ESC key ✅")
    except Exception as e:
        print("Escape key failed:", e)

    #scrapping done here
    wait = WebDriverWait(driver, 10)
    container = wait.until(
        EC.presence_of_element_located((By.CSS_SELECTOR, ".Job_grid-section__kgIsR"))
    )
    job_cards = container.find_elements(By.CSS_SELECTOR, ".Job_job-card__YgDAV")

    jobs = []
   
    for card in job_cards:
        try:
            company = card.find_element(By.CSS_SELECTOR, ".Job_job-card__company__7T9qY").text
        except:
            company = ""

        try:
            position = card.find_element(By.CSS_SELECTOR, ".Job_job-card__position__ic1rc").text
        except:
            position = ""

        try:
            location = card.find_element(By.CSS_SELECTOR, ".Job_job-card__locations__x1exr").text
        except:
            location = ""

        jobs.append({
            "position": position,
            "company": company,
            "location": location
        })
    
    # wait 5 sec before closing the window
    time.sleep(5)
    driver.quit()
    return HttpResponse(f"Scraping done! Total jobs: {len(jobs)}")

