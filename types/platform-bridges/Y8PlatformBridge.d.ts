import PlatformBridgeBase from './PlatformBridgeBase'

export default Y8PlatformBridge
declare class Y8PlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    _showAd: (o: any) => void

    authorizePlayer(): Promise<any>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    leaderboardsSetScore(id: any, score: any): any;

    leaderboardsGetEntries(id: any): any;

    unlockAchievement(options: any): Promise<any>;

    getAchievementsList(options: any): Promise<any>;

    showAchievementsNativePopup(options: any): Promise<void>;

    _platformLanguage: any

    #private
}
