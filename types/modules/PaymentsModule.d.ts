import ModuleBase from './ModuleBase'

export interface Purchase {
    productID: string;
    purchaseToken: string;
}

export interface CatalogItem {
    id: string;
    title: string;
    description: string;
    imageURI: string;
    price: string;
    priceCurrencyCode: string;
    priceCurrencyImage: string;
    priceValue: number;
}

export interface YandexPurchase {
    id: string;
}

declare class PaymentsModule extends ModuleBase {
    public get isSupported(): boolean;

    public get isGetCatalogSupported(): boolean;

    public get isGetPurchasesSupported(): boolean;

    public get isConsumePurchaseSupported(): boolean;

    public purchase(options: YandexPurchase): Promise<Purchase>;

    public getPurchases(): Promise<Purchase[]>;

    public getCatalog(): Promise<CatalogItem[]>;

    public consumePurchase(options: {purchaseToken?: string}): Promise<void>;
}

export default PaymentsModule
