import { Card } from "@/components/ui/card"
import { WishlistHeader } from "@/components/wishlist-header"
import { WishlistItems } from "@/components/wishlist-items"

export default async function WishlistPage() {
  // In a real app, you'd fetch this data from your API
  const wishlistItems = [
    { id: 1, name: "Lugia", set: "Neo Genesis", estimatedCost: 200 },
    { id: 2, name: "Blastoise", set: "Base Set", estimatedCost: 150 },
    // Add more sample wishlist items...
  ]

  return (
    <div className="py-10">
      <WishlistHeader />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <WishlistItems items={wishlistItems} />
          </div>
        </Card>
      </div>
    </div>
  )
}

