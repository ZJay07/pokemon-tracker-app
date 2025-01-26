interface WishlistItem {
  id: number
  name: string
  set: string
  estimatedCost: number
}

interface WishlistItemsProps {
  items: WishlistItem[]
}

export function WishlistItems({ items }: WishlistItemsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Set</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estimated Cost
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.set}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.estimatedCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

