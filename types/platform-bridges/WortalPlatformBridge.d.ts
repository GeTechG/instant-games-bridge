import PlatformBridgeBase from './PlatformBridgeBase'

export default WortalPlatformBridge
declare class WortalPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    get deviceType(): any;

    initialize(): any;

    sendMessage(message: any): Promise<void>;

    showBanner(options: any): void;

    showInterstitial(options: any): void;

    showRewarded(options: any): void;

    isStorageSupported(storageType: any): any;

    isStorageAvailable(storageType: any): any;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    #private
}
// # sourceMappingURL=WortalPlatformBridge.d.ts.map
