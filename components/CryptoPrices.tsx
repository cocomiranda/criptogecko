'use client'

import { useState } from 'react'
import { formatNumber } from '@/lib/utils'

export default function CryptoPrices({ initialData }: { initialData: any[] }) {
  // State to keep track of the selected cryptocurrency
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null)

  return (
    <div className="w-[380px] overflow-x-hidden">
      <table className="w-full border-collapse text-[8pt]">
        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="p-1 text-left">#</th>
            <th className="p-1 text-left">COIN</th>
            <th className="p-1 text-right">PRICE</th>
            <th className="p-1 text-right">1h</th>
            <th className="p-1 text-right">1d</th>
            <th className="p-1 text-right">1w</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {initialData.map((crypto: any, index: number) => (
            <>
              {/* Main row for each cryptocurrency */}
              <tr 
                key={crypto.id}
                className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700`}
                onClick={() => setSelectedCoin(selectedCoin === crypto.id ? null : crypto.id)}
              >
                <td className="p-1 font-mono text-gray-900 dark:text-gray-100">
                  {String(index + 1).padStart(3, '0')}
                </td>
                <td className="p-1">
                  <div className="flex items-center gap-1">
                    <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-3 h-3" />
                    <span className="font-mono text-gray-900 dark:text-gray-100">{crypto.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="p-1 font-mono text-gray-900 dark:text-gray-100 text-right">
                  ${crypto.current_price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <PercentageCell value={crypto.price_change_percentage_1h_in_currency} />
                <PercentageCell value={crypto.price_change_percentage_24h_in_currency} />
                <PercentageCell value={crypto.price_change_percentage_7d_in_currency} />
              </tr>
              {/* Additional row for market cap and volume when selected */}
              {selectedCoin === crypto.id && (
                <tr className={index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                  <td colSpan={6} className="p-1 text-[7pt] text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Mkt Cap: ${formatNumber(crypto.market_cap)}</span>
                      <span>24h Vol: ${formatNumber(crypto.total_volume)}</span>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Component to display percentage changes with color coding
function PercentageCell({ value }: { value: number }) {
  const formattedValue = value?.toFixed(2) ?? '0.00'
  const isPositive = value > 0
  const isZero = value === 0
  const textColor = isZero ? 'text-gray-600 dark:text-gray-400' : isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'

  return (
    <td className={`p-1 text-right font-mono ${textColor}`}>
      {isZero ? '0' : isPositive ? `+${formattedValue}` : formattedValue}
    </td>
  )
}

