from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("pokemon/", include('pokemon.urls')),  # Reference to app-level URLs
]