import PlatformBridgeBase from './PlatformBridgeBase'

export default PlayDeckPlatformBridge
declare class PlayDeckPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    initialize(): any;

    sendMessage(message: any): Promise<void>;

    authorizePlayer(): Promise<void>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    share(): void;

    purchase(options: any): any;

    #private
}
// # sourceMappingURL=PlayDeckPlatformBridge.d.ts.map
