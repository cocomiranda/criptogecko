import CryptoPrices from '@/components/CryptoPrices'
import ThemeToggle from '@/components/ThemeToggle'
import { fetchCryptoPrices } from '@/lib/api'

export default async function Home() {
  // Fetch initial cryptocurrency data
  const initialData = await fetchCryptoPrices()

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-1">
      <div className="w-[380px] mx-auto">
        {/* Header with title and theme toggle */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-sm font-bold text-gray-900 dark:text-gray-100">Top 100 Crypto</h1>
          <ThemeToggle />
        </div>
        {/* Main component to display cryptocurrency prices */}
        <CryptoPrices initialData={initialData} />
      </div>
    </main>
  )
}

