import PlatformBridgeBase from './PlatformBridgeBase'

export default JioGamesPlatformBridge
declare class JioGamesPlatformBridge extends PlatformBridgeBase {
    _preloadInterstitialPromise: any

    _preloadRewardedPromise: any

    _isBannerAvailable: boolean

    initialize(): any;

    showBanner(position: any): void;

    leaderboardsSetScore(_: any, score: any, isMain: any): Promise<void>;

    #private
}
