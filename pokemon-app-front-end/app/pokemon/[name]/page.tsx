"use client"

import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { PokemonCard } from "@/components/pokemon-card"

export default function PokemonDetailPage() {
  const { name } = useParams()
  const searchParams = useSearchParams()
  const setId = searchParams.get("set_id")
  const [pokemonData, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/pokemon/get_card/?set_id=${encodeURIComponent(setId)}&name=${encodeURIComponent(name)}`,
        )
        if (response.ok) {
          const data = await response.json()
          setPokemonData(data)
        } else {
          console.error("Error fetching Pokémon data:", response.statusText)
        }
      } catch (error) {
        console.error("Error fetching Pokémon data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (name && setId && name.trim() !== "" && setId.trim() !== "") {
      fetchPokemonData()
    }
  }, [name, setId])

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
        <PokemonCard pokemon={{ name: name as string, ...pokemonData }} />
      </div>
    </div>
  )
}

