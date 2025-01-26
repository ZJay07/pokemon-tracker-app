import { Card } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { CollectionSummary } from "@/components/collection-summary"
import { ValueChart } from "@/components/value-chart"
import { RarityDistribution } from "@/components/rarity-distribution"

export default async function DashboardPage() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </div>
  )
}

