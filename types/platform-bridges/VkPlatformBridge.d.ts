export default VkPlatformBridge;
declare class VkPlatformBridge extends PlatformBridgeBase {
    initialize(): any;
    authorizePlayer(): Promise<void>;
    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;
    deleteDataFromStorage(key: any, storageType: any): Promise<any>;
    showBanner(options: any): void;
    inviteFriends(): any;
    joinCommunity(options: any): any;
    share(options: any): any;
    createPost(options: any): any;
    addToHomeScreen(): any;
    addToFavorites(): any;
    showLeaderboardNativePopup(options: any): any;
    clipboardWrite(text: any): any;
    #private;
}
import PlatformBridgeBase from './PlatformBridgeBase';
//# sourceMappingURL=VkPlatformBridge.d.ts.map