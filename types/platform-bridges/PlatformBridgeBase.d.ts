import PromiseDecorator from '../common/PromiseDecorator'

export default PlatformBridgeBase
declare class PlatformBridgeBase {
    constructor(options: any);

    get options(): any;

    get platformId(): string;

    get platformSdk(): any;

    get platformLanguage(): string;

    get platformPayload(): string;

    get platformTld(): any;

    get isPlatformGetAllGamesSupported(): boolean;

    get isPlatformGetGameByIdSupported(): boolean;

    get isPlatformAudioEnabled(): boolean;

    get isPlatformPaused(): any;

    get visibilityState(): any;

    get isPlayerAuthorizationSupported(): boolean;

    get isPlayerAuthorized(): boolean;

    get playerId(): any;

    get playerName(): any;

    get playerPhotos(): any[];

    get playerExtra(): {};

    get defaultStorageType(): string;

    get isBannerSupported(): boolean;

    get isInterstitialSupported(): boolean;

    get isMinimumDelayBetweenInterstitialEnabled(): boolean;

    get isRewardedSupported(): boolean;

    get isInviteFriendsSupported(): boolean;

    get isJoinCommunitySupported(): boolean;

    get isShareSupported(): boolean;

    get isCreatePostSupported(): boolean;

    get isAddToHomeScreenSupported(): boolean;

    get isAddToFavoritesSupported(): boolean;

    get isRateSupported(): boolean;

    get isExternalLinksAllowed(): boolean;

    get deviceType(): string;

    get isPaymentsSupported(): boolean;

    get leaderboardsType(): string;

    get isRemoteConfigSupported(): boolean;

    get isClipboardSupported(): boolean;

    get isAchievementsSupported(): boolean;

    get isGetAchievementsListSupported(): boolean;

    get isAchievementsNativePopupSupported(): boolean;

    _isInitialized: boolean

    _platformSdk: any

    _isPlayerAuthorized: boolean

    _playerId: any

    _playerName: any

    _playerPhotos: any[]

    _playerExtra: {}

    _visibilityState: any

    _localStorage: any

    _defaultStorageType: string

    _platformStorageCachedData: any

    _isBannerSupported: boolean

    _paymentsPurchases: any[]

    _pauseStateAggregator: any

    _audioStateAggregator: any

    _options: any

    initialize(): Promise<void>;

    sendMessage(): Promise<void>;

    getServerTime(): Promise<any>;

    getAllGames(): Promise<never>;

    getGameById(): Promise<never>;

    authorizePlayer(): Promise<never>;

    isStorageSupported(storageType: any): boolean;

    isStorageAvailable(storageType: any): boolean;

    getDataFromStorage(key: any, storageType: any, tryParseJson: any): Promise<any>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<void>;

    deleteDataFromStorage(key: any, storageType: any): Promise<void>;

    showBanner(): void;

    hideBanner(): void;

    preloadInterstitial(): void;

    showInterstitial(): void;

    preloadRewarded(): void;

    showRewarded(): void;

    checkAdBlock(): Promise<any>;

    inviteFriends(): Promise<never>;

    joinCommunity(): Promise<never>;

    share(): Promise<never>;

    createPost(): Promise<never>;

    addToHomeScreen(): Promise<never>;

    addToFavorites(): Promise<never>;

    rate(): Promise<never>;

    leaderboardsSetScore(): Promise<never>;

    leaderboardsGetEntries(): Promise<never>;

    leaderboardsShowNativePopup(): Promise<never>;

    paymentsPurchase(id: any): Promise<{
        id: any;
    }>;

    paymentsConsumePurchase(id: any): Promise<{
        id: any;
    }>;

    paymentsGetCatalog(): Promise<any>;

    paymentsGetPurchases(): Promise<any[]>;

    getRemoteConfig(): Promise<never>;

    clipboardRead(): Promise<string>;

    clipboardWrite(text: any): Promise<void>;

    unlockAchievement(): Promise<never>;

    getAchievementsList(): Promise<never>;

    showAchievementsNativePopup(): Promise<never>;

    _getDataFromLocalStorage(key: any, tryParseJson: any): any;

    _setDataToLocalStorage(key: any, value: any): void;

    _deleteDataFromLocalStorage(key: any): void;

    _setVisibilityState(state: any): void;

    _setBannerState(state: any): void;

    _setInterstitialState(state: any): void;

    _setRewardedState(state: any): void;

    _setAudioState(isEnabled: any): void;

    _setPauseState(isPaused: any): void;

    _createPromiseDecorator(actionName: any): PromiseDecorator;

    _getPromiseDecorator(actionName: any): any;

    _resolvePromiseDecorator(id: any, data: any): void;

    _rejectPromiseDecorator(id: any, error: any): void;

    _paymentsGetProductsPlatformData(): any;

    _paymentsGetProductPlatformData(id: any): any;

    _paymentsGenerateTransactionId(id: any): string;

    _advertisementShowErrorPopup(isRewarded: any): Promise<void>;

    _playerApplyGuestData(): void;

    #private
}
