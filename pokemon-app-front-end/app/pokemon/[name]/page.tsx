"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { PokemonCard } from "@/components/pokemon-card"

export default function PokemonDetailPage() {
  const { name } = useParams()
  const [pokemonData, setPokemonData] = useState<{
    id: number
    name: string
    types: string[]
    forms: string[]
    abilities: string[]
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/pokemon/get_pokemon/?name=${encodeURIComponent(name)}`)
        const data = await response.json()
        setPokemonData(data)
      } catch (error) {
        console.error("Error fetching Pokémon data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPokemonData()
  }, [name])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!pokemonData) {
    return <div>No Pokémon data found</div>
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">{name} Details</h1>
        <PokemonCard pokemon={pokemonData} />
      </div>
    </div>
  )
}
