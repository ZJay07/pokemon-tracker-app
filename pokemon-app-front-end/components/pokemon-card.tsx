import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PokemonCardProps {
  pokemon: {
    id: number
    name: string
    types: string[]
    forms: string[]
    abilities: string[]
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
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <dl className="grid grid-cols-2 gap-4 w-full">
          <div>
            <dt className="text-sm font-medium text-gray-500">Types</dt>
            <dd className="mt-1 text-sm text-gray-900 capitalize">{pokemon.types.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Forms</dt>
            <dd className="mt-1 text-sm text-gray-900 capitalize">{pokemon.forms.join(", ")}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">Abilities</dt>
            <dd className="mt-1 text-sm text-gray-900 capitalize">{pokemon.abilities.join(", ")}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <Button onClick={() => router.push("/collection")}>Back to Search</Button>
        </div>
      </CardContent>
    </Card>
  )
}

