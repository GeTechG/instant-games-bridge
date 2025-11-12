import PlatformBridgeBase from './PlatformBridgeBase'

export default QaToolPlatformBridge
declare class QaToolPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    get deviceType(): any;

    get platformPayload(): any;

    get leaderboardsType(): any;

    _supportedFeatures: any[]

    _leaderboardsType: any

    initialize(): any;

    authorizePlayer(options: any): any;

    sendMessage(message: any): Promise<void>;

    showInterstitial(placement: any): void;

    showRewarded(placement: any): void;

    showBanner(position: any, placement: any): void;

    inviteFriends(): any;

    joinCommunity(): any;

    share(): any;

    createPost(): any;

    addToHomeScreen(): any;

    addToFavorites(): any;

    rate(): any;

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    getRemoteConfig(): any;

    clipboardWrite(text: any): any;

    clipboardRead(): any;

    leaderboardsSetScore(id: any, score: any): any;

    leaderboardsGetEntries(id: any): any;

    unlockAchievement(options: any): Promise<any>;

    getAchievementsList(options: any): Promise<any>;

    showAchievementsNativePopup(): Promise<void>;

    _deviceType: any

    _platformLanguage: any

    _platformTld: any

    _platformPayload: any

    #private
}
