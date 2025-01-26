"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface SearchFormProps {
  onSearchResults: (results: any[]) => void
}

export function SearchForm({ onSearchResults }: SearchFormProps) {
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`http://localhost:8000/pokemon/get_pokemon/?search=${encodeURIComponent(search)}`)
      if (!response.ok) {
        throw new Error("Failed to fetch cards")
      }
      const data = await response.json()
      onSearchResults(data.results)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search cards. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Search for a card..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  )
}


