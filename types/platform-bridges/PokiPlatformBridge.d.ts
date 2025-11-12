import PlatformBridgeBase from './PlatformBridgeBase'

export default PokiPlatformBridge
declare class PokiPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    sendMessage(message: any): Promise<void>;
}
