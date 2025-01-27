import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PokemonCardProps {
  pokemon: {
    name: string
    image: string
    price: {
      low: number
      mid: number
      high: number
      market: number
      directLow: number
    }
    set_name: string
    series: string
  }
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const router = useRouter()

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-48 h-48 relative mb-4 border-2 border-gray-200 rounded-lg overflow-hidden">
          <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} layout="fill" objectFit="contain" />
        </div>
        <dl className="grid grid-cols-2 gap-4 w-full">
          <div>
            <dt className="text-sm font-medium text-gray-500">Set Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{pokemon.set_name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Series</dt>
            <dd className="mt-1 text-sm text-gray-900">{pokemon.series}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">Price (Holofoil)</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul>
                <li>Low: ${pokemon.price.low}</li>
                <li>Mid: ${pokemon.price.mid}</li>
                <li>High: ${pokemon.price.high}</li>
                <li>Market: ${pokemon.price.market}</li>
                <li>Direct Low: ${pokemon.price.directLow}</li>
              </ul>
            </dd>
          </div>
        </dl>
        <div className="mt-6">
          <Button onClick={() => router.push("/collection")}>Back to Search</Button>
        </div>
      </CardContent>
    </Card>
  )
}

