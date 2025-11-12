import PlatformBridgeBase from './PlatformBridgeBase'

export default VkPlayPlatformBridge
declare class VkPlayPlatformBridge extends PlatformBridgeBase {
    get platformId(): any;

    initialize(): any;

    authorizePlayer(): any;

    getPaymentsCatalog(): any;

    purchase(options: any): any;

    #private
}
