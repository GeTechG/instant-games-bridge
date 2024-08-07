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

declare class AdvertisementModule extends ModuleBase {
    get isBannerSupported(): boolean

    get bannerState(): typeof BANNER_STATE[keyof typeof BANNER_STATE]

    get interstitialState(): typeof INTERSTITIAL_STATE[keyof typeof INTERSTITIAL_STATE]

    get rewardedState(): typeof REWARDED_STATE[keyof typeof REWARDED_STATE]

    get minimumDelayBetweenInterstitial(): number

    setMinimumDelayBetweenInterstitial(options: any): void

    constructor(platformBridge: any)

    showBanner(options: BannerOptions): void

    hideBanner(): void

    showInterstitial(options: any): void

    showRewarded(options: any): void

    isAdBlockDetected(): Promise<boolean>
}

type AdvertisementModuleEvent = AdvertisementModule & EventLite;

export default AdvertisementModuleEvent
