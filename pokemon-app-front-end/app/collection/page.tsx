"use client"

import { useState } from "react"
import type { Card as CardType } from "@/types/api"
import { Card } from "@/components/ui/card"
import { CollectionHeader } from "@/components/collection-header"
import { CardList } from "@/components/card-list"
import { SearchForm } from "@/components/search-form"
import { CardDetails } from "@/components/card-details"
import { CardForm } from "@/components/card-form"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function CollectionPage() {
  const [searchResults, setSearchResults] = useState<CardType[]>([])
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null)
  const [isAddingCard, setIsAddingCard] = useState(false)

  const handleSearchResults = (results: CardType[]) => {
    setSearchResults(results)
    setSelectedCard(null)
  }

  const handleCardSuccess = () => {
    setIsAddingCard(false)
    // Refresh the search results
    if (searchResults.length > 0) {
      // Re-run the last search
      // You might want to store the last search query to properly refresh
    }
  }

  return (
    <div className="py-10">
      <CollectionHeader />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between mb-6">
              <SearchForm onSearchResults={handleSearchResults} />
              <Dialog open={isAddingCard} onOpenChange={setIsAddingCard}>
                <DialogTrigger asChild>
                  <Button>Add Card</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Card</DialogTitle>
                  </DialogHeader>
                  <CardForm onSuccess={handleCardSuccess} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CardList cards={searchResults} onCardSelect={setSelectedCard} />
              </div>
              <div>{selectedCard && <CardDetails card={selectedCard} />}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

