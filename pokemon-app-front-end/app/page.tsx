"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { CollectionSummary } from "@/components/collection-summary"
import { ValueChart } from "@/components/value-chart"
import { RarityDistribution } from "@/components/rarity-distribution"
import { SearchForm } from "@/components/search-form"
import { CardGrid } from "@/components/card-grid"
import { Toaster } from "@/components/ui/toaster"

interface PokemonCard {
  id: number
  name: string
  set_name: string
  number: string
  rarity: string
  image_url: string
  price: number
}

export default function DashboardPage() {
  const [searchResults, setSearchResults] = useState<PokemonCard[]>([])

  // In a real app, you'd fetch this data from your API
  const collectionData = {
    totalValue: 15000,
    totalCards: 500,
    mostValuableCard: {
      name: "Charizard",
      value: 500,
    },
  }

  return (
    <div className="py-10">
      <DashboardHeader />
      <div className="mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Overview</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CollectionSummary data={collectionData} />
            </Card>
            <Card>
              <ValueChart />
            </Card>
            <Card>
              <RarityDistribution />
            </Card>
          </div>

          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Pokémon Card Search</h2>
          <Card className="p-6">
            <SearchForm onSearchResults={setSearchResults} />
            <CardGrid cards={searchResults} />
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

