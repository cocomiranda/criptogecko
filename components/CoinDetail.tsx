import { formatNumber } from '@/lib/utils'

interface CoinDetailProps {
  coin: any;
  onClose: () => void;
}

export function CoinDetail({ coin, onClose }: CoinDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-full max-w-[300px]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img src={coin.image || "/placeholder.svg"} alt={coin.name} className="w-6 h-6" />
            <h2 className="text-sm font-bold">{coin.name} ({coin.symbol.toUpperCase()})</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-sm">
            ✕
          </button>
        </div>
        <div className="space-y-1 text-xs">
          <p>Price: ${coin.current_price.toLocaleString()}</p>
          <p>Market Cap: ${formatNumber(coin.market_cap)}</p>
          <p>24h Volume: ${formatNumber(coin.total_volume)}</p>
        </div>
      </div>
    </div>
  )
}

