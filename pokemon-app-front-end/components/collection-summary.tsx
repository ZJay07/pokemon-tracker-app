interface CollectionSummaryProps {
  data: {
    totalValue: number
    totalCards: number
    mostValuableCard: {
      name: string
      value: number
    }
  }
}

export function CollectionSummary({ data }: CollectionSummaryProps) {
  return (
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Collection Summary</h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Total Value</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">${data.totalValue.toLocaleString()}</dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-sm font-medium text-gray-500">Total Cards</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{data.totalCards}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500">Most Valuable Card</dt>
          <dd className="mt-1 text-lg font-medium text-gray-900">
            {data.mostValuableCard.name} (${data.mostValuableCard.value})
          </dd>
        </div>
      </dl>
    </div>
  )
}

