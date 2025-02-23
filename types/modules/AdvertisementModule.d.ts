import EventLite from 'event-lite'
import ModuleBase from './ModuleBase'
import {
    INTERSTITIAL_STATE, REWARDED_STATE, BANNER_STATE,
} from '../constants'

type BannerOptions = object | {
    position: 'top' | 'bottom'
    layoutType?: 'resize'
    canClose: boolean
} | {
    containerId: string
}
export type BannerState = typeof BANNER_STATE[keyof typeof BANNER_STATE];
export type InterstitialState = typeof INTERSTITIAL_STATE[keyof typeof INTERSTITIAL_STATE];
export type RewardState = typeof REWARDED_STATE[keyof typeof REWARDED_STATE];

declare class AdvertisementModule extends ModuleBase {
    get isBannerSupported(): boolean

    get bannerState(): BannerState

    get interstitialState(): InterstitialState

    get rewardedState(): RewardState

    get minimumDelayBetweenInterstitial(): number

    setMinimumDelayBetweenInterstitial(options: any): void

    constructor(platformBridge: any)

    showBanner(options?: BannerOptions): void

    hideBanner(): void

    showInterstitial(options?: any): void

    showRewarded(options?: any): void

    checkAdBlock(): Promise<boolean>
}

type AdvertisementModuleEvent = AdvertisementModule & EventLite;

export default AdvertisementModuleEvent
