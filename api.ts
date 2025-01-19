export async function fetchCryptoPrices() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h,24h,7d',
    { 
      next: { revalidate: 60 }, // Revalidate data every 60 seconds
      headers: {
        'Accept': 'application/json'
      }
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch crypto prices')
  }

  return response.json()
}

