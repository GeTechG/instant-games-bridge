import PlatformBridgeBase from './PlatformBridgeBase'

export default BitquestPlatformBridge
declare class BitquestPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    getDataFromStorage(key: any, storageType: any, tryParseJson: any): any;

    showPreRoll(): void;

    paymentsPurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetPurchases(): any;

    leaderboardsSetScore(id: any, score: any): any;

    leaderboardsGetEntries(id: any): any;

    #private
}
