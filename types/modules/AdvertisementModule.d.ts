export default AdvertisementModule;
declare class AdvertisementModule extends ModuleBase {
    get isBannerSupported(): any;
    get bannerState(): any;
    get interstitialState(): any;
    get rewardedState(): any;
    get minimumDelayBetweenInterstitial(): number;
    setMinimumDelayBetweenInterstitial(options: any): void;
    showBanner(options: any): void;
    hideBanner(): void;
    showInterstitial(options: any): void;
    showRewarded(options: any): void;
    isAdBlockDetected(): any;
    #private;
}
import ModuleBase from './ModuleBase';
//# sourceMappingURL=AdvertisementModule.d.ts.map