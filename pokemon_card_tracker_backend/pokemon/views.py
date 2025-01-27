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
            'id': pokemon_data['id']
        }
        return JsonResponse(pokemon_info)
    else:
        return JsonResponse({'error': 'Pokémon not found'}, status=404)

@api_view(['GET'])
def get_pokemon_card_details(request):
    # Extract query parameters
    set_id = request.GET.get('set_id', '')
    pokemon_name = request.GET.get('name', '').lower()

    if not set_id or not pokemon_name:
        return JsonResponse({'error': 'Missing parameters, set_id and name are required.'}, status=400)

    # Build the API request URL
    url = f'https://api.pokemontcg.io/v2/cards?q=set.id:{set_id} name:{pokemon_name}'

    try:
        response = requests.get(url)
        if response.status_code == 200:
            cards = response.json().get('data', [])
            if not cards:
                return JsonResponse({'error': 'No cards found.'}, status=404)

            # Assuming the first card is the one you want
            card = cards[0]
            card_details = {
                'image': card['images']['small'],
                'price': card['tcgplayer']['prices'].get('holofoil', {}),
                'set_name': card['set']['name'],
                'series': card['set']['series']
            }
            return JsonResponse(card_details)
        else:
            return JsonResponse({'error': 'Failed to fetch data from Pokémon TCG API'}, status=response.status_code)
    except requests.RequestException as e:
        return JsonResponse({'error': str(e)}, status=500)
