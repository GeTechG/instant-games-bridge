import PlatformBridgeBase from './PlatformBridgeBase'

export default YandexPlatformBridge
declare class YandexPlatformBridge extends PlatformBridgeBase {
    get platformLanguage(): any;

    initialize(): any;

    sendMessage(message: any): Promise<void>;

    getAllGames(): Promise<any>;

    getGameById(options: any): Promise<any>;

    authorizePlayer(): any;

    getDataFromStorage(key: any, storageType: any, tryParseJson: any): any;

    setDataToStorage(key: any, value: any, storageType: any): any;

    deleteDataFromStorage(key: any, storageType: any): any;

    addToHomeScreen(): any;

    rate(): any;

    leaderboardsSetScore(id: any, score: any): any;

    leaderboardsGetEntries(id: any): any;

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    getRemoteConfig(options: any): any;

    clipboardWrite(text: any): any;

    #private
}
