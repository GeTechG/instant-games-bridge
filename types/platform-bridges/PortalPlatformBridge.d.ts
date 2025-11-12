import PlatformBridgeBase from './PlatformBridgeBase'

export default PortalPlatformBridge
declare class PortalPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    initialize(): any;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    sendMessage(message: any): Promise<void>;

    paymentsPurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;
}
