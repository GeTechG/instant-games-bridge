import PlatformBridgeBase from './PlatformBridgeBase'

export default AbsoluteGamesPlatformBridge
declare class AbsoluteGamesPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    authorizePlayer(): any;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    #private
}
// # sourceMappingURL=AbsoluteGamesPlatformBridge.d.ts.map
