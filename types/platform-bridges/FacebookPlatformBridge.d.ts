import PlatformBridgeBase from './PlatformBridgeBase'

export default FacebookPlatformBridge
declare class FacebookPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    _contextId: any

    _supportedApis: any[]

    _preloadedInterstitialPromises: {}

    _preloadedRewardedPromises: {}

    _isJoinCommunitySupported: boolean

    initialize(): any;

    _platformLanguage: any

    sendMessage(message: any): Promise<any>;

    authorizePlayer(): Promise<void>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<any>;

    deleteDataFromStorage(key: any, storageType: any): Promise<any>;

    showBanner(position: any, placement: any): void;

    preloadInterstitial(placement: any): void;

    showInterstitial(placement: any): void;

    preloadRewarded(placement: any): void;

    showRewarded(placement: any): void;

    leaderboardsSetScore(id: any, score: any): any;

    leaderboardsShowNativePopup(id: any): any;

    _overlay: any

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    inviteFriends(options?: {}): any;

    joinCommunity(options: any): any;

    share(options: any): any;

    #private
}
