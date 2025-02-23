import PromiseDecorator from '../common/PromiseDecorator'

export default class PlatformBridgeBase {
    constructor(options: any);

    get platformId(): string;

    get platformSdk(): any;

    get platformLanguage(): string;

    get platformPayload(): string;

    get platformTld(): any;

    get visibilityState(): any;

    get isPlayerAuthorizationSupported(): boolean;

    get isPlayerAuthorized(): boolean;

    get playerId(): any;

    get playerName(): any;

    get playerPhotos(): any[];

    get defaultStorageType(): string;

    get isBannerSupported(): boolean;

    get bannerState(): any;

    get interstitialState(): any;

    get rewardedState(): any;

    get isInviteFriendsSupported(): boolean;

    get isJoinCommunitySupported(): boolean;

    get isShareSupported(): boolean;

    get isCreatePostSupported(): boolean;

    get isAddToHomeScreenSupported(): boolean;

    get isAddToFavoritesSupported(): boolean;

    get isRateSupported(): boolean;

    get isExternalLinksAllowed(): boolean;

    get deviceType(): string;

    get isLeaderboardSupported(): boolean;

    get isLeaderboardNativePopupSupported(): boolean;

    get isLeaderboardMultipleBoardsSupported(): boolean;

    get isLeaderboardSetScoreSupported(): boolean;

    get isLeaderboardGetScoreSupported(): boolean;

    get isLeaderboardGetEntriesSupported(): boolean;

    get isPaymentsSupported(): boolean;

    get isRemoteConfigSupported(): boolean;

    get isClipboardSupported(): boolean;

    _isInitialized: boolean

    _platformSdk: any

    _isPlayerAuthorized: boolean

    _playerId: any

    _playerName: any

    _playerPhotos: any[]

    _visibilityState: any

    _localStorage: any

    _defaultStorageType: string

    _platformStorageCachedData: any

    _isBannerSupported: boolean

    _interstitialState: any

    _rewardedState: any

    _bannerState: any

    _options: any

    initialize(): Promise<void>;

    sendMessage(): Promise<void>;

    getServerTime(): any;

    authorizePlayer(): Promise<never>;

    isStorageSupported(storageType: any): boolean;

    isStorageAvailable(storageType: any): boolean;

    getDataFromStorage(key: any, storageType: any): Promise<any>;

    setDataToStorage(key: any, value: any, storageType: any): Promise<void>;

    deleteDataFromStorage(key: any, storageType: any): Promise<void>;

    showBanner(): void;

    hideBanner(): void;

    showInterstitial(): void;

    showRewarded(): void;

    isAdBlockDetected(): Promise<any>;

    inviteFriends(): Promise<never>;

    joinCommunity(): Promise<never>;

    share(): Promise<never>;

    createPost(): Promise<never>;

    addToHomeScreen(): Promise<never>;

    addToFavorites(): Promise<never>;

    rate(): Promise<never>;

    setLeaderboardScore(): Promise<never>;

    getLeaderboardScore(): Promise<never>;

    getLeaderboardEntries(): Promise<never>;

    showLeaderboardNativePopup(): Promise<never>;

    purchase(): Promise<never>;

    getPaymentsPurchases(): Promise<never>;

    getPaymentsCatalog(): Promise<never>;

    consumePurchase(): Promise<never>;

    getRemoteConfig(): Promise<never>;

    clipboardRead(): Promise<string>;

    clipboardWrite(text: any): Promise<void>;

    _getDataFromLocalStorage(key: any): any;

    _setDataToLocalStorage(key: any, value: any): void;

    _deleteDataFromLocalStorage(key: any): void;

    _setInterstitialState(state: any): void;

    _setRewardedState(state: any): void;

    _setBannerState(state: any): void;

    _createPromiseDecorator(actionName: any): PromiseDecorator;

    _getPromiseDecorator(actionName: any): any;

    _resolvePromiseDecorator(id: any, data: any): void;

    _rejectPromiseDecorator(id: any, error: any): void;

    static mixin(target: any): void;
}
