interface Card {
  id: number
  name: string
  set_name: string
  number: string
  rarity: string
  price: number
}

interface CardListProps {
  cards: Card[]
  onCardSelect: (card: Card) => void
}

export function CardList({ cards, onCardSelect }: CardListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Set</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rarity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cards.map((card) => (
            <tr key={card.id} onClick={() => onCardSelect(card)} className="cursor-pointer hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{card.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.set_name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.number}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.rarity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${card.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

