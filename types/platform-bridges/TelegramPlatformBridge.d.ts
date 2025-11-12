import PlatformBridgeBase from './PlatformBridgeBase'

export default TelegramPlatformBridge
declare class TelegramPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    initialize(): any;

    sendMessage(message: any): Promise<void>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    clipboardRead(): any;

    #private
}
