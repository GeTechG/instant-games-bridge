import PlatformBridgeBase from './PlatformBridgeBase'

export default MsnPlatformBridge
declare class MsnPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    authorizePlayer(): Promise<any>;

    share(options: any): Promise<any>;

    leaderboardsSetScore(id: any, score: any): Promise<any>;

    showBanner(position: any): void;

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    #private
}
