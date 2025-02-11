export default CrazyGamesPlatformBridge;
declare class CrazyGamesPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;
    get deviceType(): any;
    initialize(): any;
    authorizePlayer(): any;
    sendMessage(message: any): Promise<void>;
    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;
    showBanner(options: any): void;
    #private;
}
import PlatformBridgeBase from './PlatformBridgeBase';
//# sourceMappingURL=CrazyGamesPlatformBridge.d.ts.map