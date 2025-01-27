import { Card } from "@/components/ui/card"
import { CollectionHeader } from "@/components/collection-header"
import { SearchForm } from "@/components/search-form"

export default function CollectionPage() {
  return (
    <div className="py-10">
      <CollectionHeader />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Card>
          <div className="px-4 py-5 sm:p-6">
            <SearchForm />
          </div>
        </Card>
      </div>
    </div>
  )
}

