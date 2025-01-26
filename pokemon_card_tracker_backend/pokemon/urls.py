from django.urls import path
from . import views

urlpatterns = [
    path('get_pokemon/', views.get_pokemon_info),
]