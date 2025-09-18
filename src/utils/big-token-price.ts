// BIG Token Price API for QuickSwap integration
export interface BigTokenPrice {
  price: number;
  priceChange24h: number;
  volume24h: number;
  lastUpdated: Date;
}

// QuickSwap API endpoint for BIG token price
const QUICKSWAP_API_URL = 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06';

// BIG token contract address on Polygon
const BIG_TOKEN_ADDRESS = '0x0A0eddbbF609d3b0c168a52f64345721D582906a';

export async function fetchBigTokenPrice(): Promise<BigTokenPrice | null> {
  try {
    // QuickSwap GraphQL query for token price
    const query = `
      query {
        token(id: "${BIG_TOKEN_ADDRESS}") {
          derivedETH
          totalLiquidity
          tradeVolume
          txCount
        }
        bundle(id: "1") {
          ethPrice
        }
      }
    `;

    const response = await fetch(QUICKSWAP_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return null;
    }

    const token = data.data.token;
    const bundle = data.data.bundle;

    if (!token || !bundle) {
      return null;
    }

    // Calculate USD price
    const ethPrice = parseFloat(bundle.ethPrice);
    const derivedETH = parseFloat(token.derivedETH);
    const price = ethPrice * derivedETH;

    // Calculate 24h price change (simplified - would need historical data for accurate calculation)
    const priceChange24h = 0; // Placeholder - would need historical price data

    return {
      price: price,
      priceChange24h: priceChange24h,
      volume24h: parseFloat(token.tradeVolume) || 0,
      lastUpdated: new Date(),
    };

  } catch (error) {
    console.error('Error fetching BIG token price:', error);
    return null;
  }
}

// Alternative: Use CoinGecko API if BIG token is listed
export async function fetchBigTokenPriceFromCoinGecko(): Promise<BigTokenPrice | null> {
  try {
    // This would work if BIG token is listed on CoinGecko
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=big-token&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data['big-token']) {
      const tokenData = data['big-token'];
      return {
        price: tokenData.usd,
        priceChange24h: tokenData.usd_24h_change || 0,
        volume24h: tokenData.usd_24h_vol || 0,
        lastUpdated: new Date(),
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching BIG token price from CoinGecko:', error);
    return null;
  }
}

// Format price for display
export function formatPrice(price: number): string {
  if (price < 0.000001) {
    return `$${price.toExponential(2)}`;
  } else if (price < 0.01) {
    return `$${price.toFixed(6)}`;
  } else if (price < 1) {
    return `$${price.toFixed(4)}`;
  } else {
    return `$${price.toFixed(2)}`;
  }
}

// Format percentage change
export function formatPriceChange(change: number): string {
  const sign = change >= 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
}

// Format volume
export function formatVolume(volume: number): string {
  if (volume >= 1000000) {
    return `$${(volume / 1000000).toFixed(1)}M`;
  } else if (volume >= 1000) {
    return `$${(volume / 1000).toFixed(1)}K`;
  } else {
    return `$${volume.toFixed(0)}`;
  }
}

// Get MATIC/POL price for BIG/MATIC pair display
export async function fetchMaticPrice(): Promise<number | null> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd'
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data['matic-network']?.usd || null;
  } catch (error) {
    console.error('Error fetching MATIC price:', error);
    return null;
  }
}

// Calculate BIG/MATIC ratio
export function calculateBigMaticRatio(bigPriceUsd: number, maticPriceUsd: number): number {
  if (maticPriceUsd === 0) return 0;
  return bigPriceUsd / maticPriceUsd;
}

// Format BIG/MATIC ratio
export function formatBigMaticRatio(ratio: number): string {
  if (ratio < 0.000001) {
    return ratio.toExponential(2);
  } else if (ratio < 0.01) {
    return ratio.toFixed(6);
  } else if (ratio < 1) {
    return ratio.toFixed(4);
  } else {
    return ratio.toFixed(2);
  }
}
