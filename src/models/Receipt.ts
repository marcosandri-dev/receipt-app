export interface Receipt {
    id: string;
    superMarket: string;
    date: Date;
    products: Product[];
    total: number;
}

export interface Product {
    id: string;
    name: string;
    quantity: number;
    fullPrice: number;
    discountedPrice?: number;
    discountNetCut?: number;
    discountPercentage?: number;
}
