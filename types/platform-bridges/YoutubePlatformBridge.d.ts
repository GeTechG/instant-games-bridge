import PlatformBridgeBase from './PlatformBridgeBase'

export default YoutubePlatformBridge
declare class YoutubePlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    initialize(): any;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    sendMessage(message: any): Promise<void>;

    leaderboardsSetScore(id: any, score: any, isMain: any): any;

    #private
}
