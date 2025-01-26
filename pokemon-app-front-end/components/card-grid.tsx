import { Card } from "@/components/ui/card"

interface PokemonCard {
  id: number
  name: string
  set_name: string
  number: string
  rarity: string
  image_url: string
  price: number
}

interface CardGridProps {
  cards: PokemonCard[]
}

export function CardGrid({ cards }: CardGridProps) {
  if (cards.length === 0) {
    return null
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Search Results</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} className="p-4">
            <div className="aspect-square relative mb-2">
              <img
                src={card.image_url || "/placeholder.svg"}
                alt={card.name}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold">{card.name}</h3>
            <p className="text-sm text-gray-600">Set: {card.set_name}</p>
            <p className="text-sm text-gray-600">Number: {card.number}</p>
            <p className="text-sm text-gray-600">Rarity: {card.rarity}</p>
            <p className="font-semibold mt-2">${card.price.toFixed(2)}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

