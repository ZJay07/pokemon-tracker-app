export interface Card {
  id: number
  name: string
  set_name: string
  number: string
  rarity: string
  image_url: string
  price: number
  last_updated: string
}

export interface ApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface ApiError {
  detail: string
}

