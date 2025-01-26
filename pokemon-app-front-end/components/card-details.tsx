import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CardDetailsProps {
  card: {
    name: string
    set_name: string
    number: string
    rarity: string
    image_url: string
    price: number
    last_updated: string
  }
}

export function CardDetails({ card }: CardDetailsProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{card.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-w-3 aspect-h-4 mb-4">
          <Image src={card.image_url || "/placeholder.svg"} alt={card.name} layout="fill" objectFit="contain" />
        </div>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-sm font-medium text-gray-500">Set</dt>
            <dd className="mt-1 text-sm text-gray-900">{card.set_name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Number</dt>
            <dd className="mt-1 text-sm text-gray-900">{card.number}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Rarity</dt>
            <dd className="mt-1 text-sm text-gray-900">{card.rarity}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900">${card.price.toFixed(2)}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
            <dd className="mt-1 text-sm text-gray-900">{new Date(card.last_updated).toLocaleString()}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

