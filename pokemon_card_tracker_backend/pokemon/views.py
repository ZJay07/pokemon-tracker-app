import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_pokemon_info(request):
    # Extract query parameters
    pokemon_name = request.GET.get('name', '')

    # Call the external Pokémon API
    response = requests.get(f"https://pokeapi.co/api/v2/pokemon/{pokemon_name}")

    if response.status_code == 200:
        # return type, name forms and ability name
        pokemon_data = response.json()
        pokemon_info = {
            'name': pokemon_data['name'],
            'types': [type['type']['name'] for type in pokemon_data['types']],
            'forms': [form['name'] for form in pokemon_data['forms']],
            'abilities': [ability['ability']['name'] for ability in pokemon_data['abilities']],
        }
        return JsonResponse(pokemon_info)
    else:
        return JsonResponse({'error': 'Pokémon not found'}, status=404)