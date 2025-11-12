import PlatformBridgeBase from './PlatformBridgeBase'

export default DiscordPlatformBridge
declare class DiscordPlatformBridge extends PlatformBridgeBase {
    _appId: any

    _accessToken: any

    initialize(): any;

    authorizePlayer(options: any): any;

    paymentsPurchase(id: any): any;

    paymentsConsumePurchase(id: any): any;

    paymentsGetCatalog(): any;

    paymentsGetPurchases(): any;

    inviteFriends(): any;

    share(options: any): any;
}
