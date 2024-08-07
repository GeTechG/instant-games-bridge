import PlatformBridgeBase from './PlatformBridgeBase'
import {
    PLATFORM_ID, STORAGE_TYPE, DEVICE_TYPE, PLATFORM_MESSAGE,
} from '../constants'

class YandexPlatformBridge extends PlatformBridgeBase {
    // platform
    get platformId(): PLATFORM_ID;

    get platformLanguage(): string;

    get platformTld(): string;

    // device
    get deviceType(): DEVICE_TYPE;

    // player
    get isPlayerAuthorizationSupported(): boolean;

    // social
    get isAddToHomeScreenSupported(): boolean;

    get isRateSupported(): boolean;

    // leaderboard
    get isLeaderboardSupported(): boolean;

    get isLeaderboardMultipleBoardsSupported(): boolean;

    get isLeaderboardSetScoreSupported(): boolean;

    get isLeaderboardGetScoreSupported(): boolean;

    get isLeaderboardGetEntriesSupported(): boolean;

    // payments
    get isPaymentsSupported(): boolean;

    // config
    get isRemoteConfigSupported(): boolean;

    initialize(): Promise<void>;

    // platform
    sendMessage(message: PLATFORM_MESSAGE): Promise<void>;

    getServerTime(): Promise<number>;

    // player
    authorizePlayer(options?: { scopes?: boolean }): Promise<void>;

    // storage
    isStorageSupported(storageType: STORAGE_TYPE): boolean;

    isStorageAvailable(storageType: STORAGE_TYPE): boolean;

    getDataFromStorage(key: string | string[], storageType: STORAGE_TYPE): Promise<any>;

    setDataToStorage(key: string | string[], value: any, storageType: STORAGE_TYPE): Promise<void>;

    deleteDataFromStorage(key: string | string[], storageType: STORAGE_TYPE): Promise<void>;

    // advertisement
    showBanner(): void;

    hideBanner(): void;

    showInterstitial(): void;

    showRewarded(): void;

    // social
    addToHomeScreen(): Promise<void>;

    rate(): Promise<void>;

    // leaderboard
    setLeaderboardScore(options: { leaderboardName: string, score: number | string }): Promise<void>;

    getLeaderboardScore(options: { leaderboardName: string }): Promise<number>;

    // eslint-disable-next-line max-len
    getLeaderboardEntries(options: {
        leaderboardName: string,
        includeUser?: boolean,
        quantityAround?: number | string,
        quantityTop?: number | string
    }): Promise<any>;

    // payments
    purchase(options: { id: string }): Promise<any>;

    getPaymentsPurchases(): Promise<any>;

    getPaymentsCatalog(): Promise<any>;

    consumePurchase(options: { purchaseToken: string }): Promise<any>;

    // config
    getRemoteConfig(options?: { defaultFlags?: any, clientFeatures?: any }): Promise<any>;

    // clipboard
    clipboardWrite(text: string): Promise<void>;
}

export default YandexPlatformBridge
