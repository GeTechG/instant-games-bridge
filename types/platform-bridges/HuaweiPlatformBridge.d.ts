import PlatformBridgeBase from './PlatformBridgeBase'

export default HuaweiPlatformBridge
declare class HuaweiPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    _appId: any

    authorizePlayer(): any;

    setDataToStorage(key: any, value: any, type: any): any;

    getDataFromStorage(key: any, type: any): any;

    deleteDataFromStorage(key: any, type: any): any;

    showInterstitial(placementId: any): void;

    showRewarded(placementId: any): void;

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    #private
}
