from django.urls import path
from . import views

urlpatterns = [
    path('get_pokemon/', views.get_pokemon_info),
    path('get_card/', views.get_pokemon_card_details)
]