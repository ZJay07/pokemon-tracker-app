"use client"

import { useState } from "react"
import type { Card } from "@/types/api"
import { createCard, updateCard } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface CardFormProps {
  card?: Card
  onSuccess: () => void
}

export function CardForm({ card, onSuccess }: CardFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: card?.name || "",
    set_name: card?.set_name || "",
    number: card?.number || "",
    rarity: card?.rarity || "",
    image_url: card?.image_url || "",
    price: card?.price || 0,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (card?.id) {
        await updateCard(card.id, formData)
      } else {
        await createCard(formData)
      }
      toast({
        title: "Success",
        description: card ? "Card updated successfully" : "Card created successfully",
      })
      onSuccess()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save card",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="set_name">Set Name</Label>
        <Input
          id="set_name"
          value={formData.set_name}
          onChange={(e) => setFormData((prev) => ({ ...prev, set_name: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          value={formData.number}
          onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="rarity">Rarity</Label>
        <Input
          id="rarity"
          value={formData.rarity}
          onChange={(e) => setFormData((prev) => ({ ...prev, rarity: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          type="url"
          value={formData.image_url}
          onChange={(e) => setFormData((prev) => ({ ...prev, image_url: e.target.value }))}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData((prev) => ({ ...prev, price: Number.parseFloat(e.target.value) }))}
          required
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : card ? "Update Card" : "Add Card"}
      </Button>
    </form>
  )
}

