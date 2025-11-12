import PlatformBridgeBase from './PlatformBridgeBase'

export default VkPlatformBridge
declare class VkPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    authorizePlayer(): Promise<void>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    showBanner(position: any): void;

    inviteFriends(): any;

    joinCommunity(options: any): any;

    share(options: any): any;

    addToHomeScreen(): any;

    addToFavorites(): any;

    clipboardWrite(text: any): any;

    #private
}
