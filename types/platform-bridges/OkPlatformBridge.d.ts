export default OkPlatformBridge;
declare class OkPlatformBridge extends PlatformBridgeBase {
    _hasValuableAccessPermission: boolean;
    _hasValuableAccessPermissionShowed: boolean;
    _platformBannerOptions: {};
    initialize(): any;
    authorizePlayer(): any;
    setDataToStorage(key: any, value: any, storageType: any): Promise<void> | Promise<any[]>;
    deleteDataFromStorage(key: any, storageType: any): Promise<void> | Promise<any[]>;
    showBanner(options: any): void;
    isAdBlockDetected(): any;
    inviteFriends(options: any): any;
    rate(): any;
    createPost(options: any): any;
    joinCommunity(options: any): any;
    #private;
}
import PlatformBridgeBase from './PlatformBridgeBase';
//# sourceMappingURL=OkPlatformBridge.d.ts.map