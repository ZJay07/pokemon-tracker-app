"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchForm() {
  const [search, setSearch] = useState("")
  const [setId, setSetId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/pokemon/get_card/?set_id=${encodeURIComponent(setId)}&name=${encodeURIComponent(search)}`,
      )
      if (response.ok) {
        const data = await response.json()
        router.push(`/pokemon/${encodeURIComponent(search)}?set_id=${encodeURIComponent(setId)}`)
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
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Pokémon Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow"
        />
        <Input
          type="text"
          placeholder="Set ID"
          value={setId}
          onChange={(e) => setSetId(e.target.value)}
          className="w-1/3"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  )
}

