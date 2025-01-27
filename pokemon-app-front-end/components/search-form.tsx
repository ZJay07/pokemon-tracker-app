"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchForm() {
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(`http://127.0.0.1:8000/pokemon/get_pokemon/?name=${encodeURIComponent(search)}`)
      if (response.ok) {
        router.push(`/pokemon/${encodeURIComponent(search)}`)
      } else {
        console.error("Error searching for Pokémon:", response.statusText)
      }
    } catch (error) {
      console.error("Error searching for Pokémon:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <Input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  )
}

