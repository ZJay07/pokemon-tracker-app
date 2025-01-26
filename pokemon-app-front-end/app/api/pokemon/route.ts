import { NextResponse } from "next/server"

const API_URL = "https://api.pokemontcg.io/v2"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`${API_URL}/cards?q=name:${query}`)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching Pokémon card data:", error)
    return NextResponse.json({ error: "Failed to fetch Pokémon card data" }, { status: 500 })
  }
}

