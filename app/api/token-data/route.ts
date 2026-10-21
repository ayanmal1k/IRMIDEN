import { NextResponse } from 'next/server'

const CONTRACT_ADDRESS = 'TEBhTK13xxVdMoEutByrsQgz9qdpaS6jLZ'
const SUNPUMP_API = `https://api-v2.sunpump.meme/pump-api/token/${CONTRACT_ADDRESS}`

export const dynamic = 'force-dynamic'
export const revalidate = 10

export async function GET() {
  try {
    const res = await fetch(SUNPUMP_API, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      throw new Error(`SunPump API returned status ${res.status}`)
    }

    const json = await res.json()
    if (json.code === 0 && json.data) {
      const d = json.data
      const priceTrx = Number(d.priceInTrx || 0)
      const trxUsd = Number(d.trxPriceInUsd || 0.33)
      const priceUsd = priceTrx * trxUsd

      return NextResponse.json({
        success: true,
        data: {
          symbol: d.symbol || 'IMD',
          name: (d.name || 'IRMIDEN').trim(),
          contractAddress: d.contractAddress || CONTRACT_ADDRESS,
          priceInTrx: priceTrx,
          priceInUsd: priceUsd,
          trxPriceInUsd: trxUsd,
          marketCapUsd: Number(d.marketCap || 0),
          liquidityUsd: Number(d.virtualLiquidity || 0),
          volume24Hr: Number(d.volume24Hr || 0),
          priceChange24Hr:
            Math.abs(Number(d.priceChange24Hr || 0)) <= 1 && Number(d.priceChange24Hr || 0) !== 0
              ? Number(d.priceChange24Hr || 0) * 100
              : Number(d.priceChange24Hr || 0),
          pumpPercentage:
            Number(d.trxReserve || 0) > 0
              ? (Number(d.trxReserve) / 103000) * 100
              : 4.94,
          totalSupply: Number(d.totalSupply || 1000000000),
          trxReserve: Number(d.trxReserve || 0),
          tokenReserve: Number(d.tokenReserve || 0),
          logoUrl: d.logoUrl || '/icon.png',
          status: d.status || 'ACTIVE',
          updatedAt: Date.now(),
        },
      })
    }

    throw new Error('Invalid response structure from SunPump')
  } catch (err: any) {
    // Fallback baseline values matching SunPump exactly
    return NextResponse.json({
      success: false,
      error: err.message,
      data: {
        symbol: 'IMD',
        name: 'IRMIDEN',
        contractAddress: CONTRACT_ADDRESS,
        priceInTrx: 0.00004292,
        priceInUsd: 0.00001418,
        trxPriceInUsd: 0.33,
        marketCapUsd: 14175.51,
        liquidityUsd: 26484.21,
        volume24Hr: 24.75,
        priceChange24Hr: 12.36,
        pumpPercentage: 4.94,
        totalSupply: 1000000000,
        trxReserve: 5089.77,
        tokenReserve: 664153522,
        logoUrl: '/icon.png',
        status: 'ACTIVE',
        updatedAt: Date.now(),
      },
    })
  }
}
