import type { ApiResponse, Card, ApiError } from "@/types/api"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json()

  if (!response.ok) {
    throw new Error((data as ApiError).detail || "An error occurred")
  }

  return data as T
}

export async function searchCards(query: string): Promise<ApiResponse<Card>> {
  const response = await fetch(`${API_BASE_URL}/cards/?search=${encodeURIComponent(query)}`)
  return handleResponse<ApiResponse<Card>>(response)
}

export async function getCard(id: number): Promise<Card> {
  const response = await fetch(`${API_BASE_URL}/cards/${id}/`)
  return handleResponse<Card>(response)
}

export async function createCard(card: Omit<Card, "id" | "last_updated">): Promise<Card> {
  const response = await fetch(`${API_BASE_URL}/cards/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
  return handleResponse<Card>(response)
}

export async function updateCard(id: number, card: Partial<Card>): Promise<Card> {
  const response = await fetch(`${API_BASE_URL}/cards/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
  return handleResponse<Card>(response)
}

export async function deleteCard(id: number): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/cards/${id}/`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete card")
  }
}

