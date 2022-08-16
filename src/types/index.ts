
export interface Pokedex {
    status: Status;
    data: Datum[];
    nextPage: string
}

export interface Datum {
    id: string;
    slug: string;
    symbol: string;
    metrics: Metrics;
}

interface Metrics {
    market_data: MarketData;
}

interface MarketData {
    price_usd: number;
}

interface Status {
    elapsed: number;
    timestamp: Date;
}

export interface AssetOptions {
    value: string,
    label: string
}