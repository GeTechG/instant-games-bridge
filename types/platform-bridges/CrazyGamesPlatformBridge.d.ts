import PlatformBridgeBase from './PlatformBridgeBase'

export default CrazyGamesPlatformBridge
declare class CrazyGamesPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    get deviceType(): any;

    initialize(): any;

    authorizePlayer(): any;

    sendMessage(message: any): Promise<void>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    showBanner(position: any): void;

    paymentsPurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetPurchases(): any;

    #private
}
