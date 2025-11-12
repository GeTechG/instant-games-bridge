import PlatformBridgeBase from './PlatformBridgeBase'

export default RedditPlatformBridge
declare class RedditPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    getDataFromStorage(key: any, storageType: any, tryParseJson: any): any;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    paymentsPurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    createPost(options?: {}): any;

    joinCommunity(): any;

    #private
}
