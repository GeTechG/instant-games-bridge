import PlatformModule from './modules/PlatformModule'
import PlayerModule from './modules/PlayerModule'
import GameModule from './modules/GameModule'
import StorageModule from './modules/StorageModule'
import AdvertisementModule from './modules/AdvertisementModule'
import SocialModule from './modules/SocialModule'
import DeviceModule from './modules/DeviceModule'
import LeaderboardModule from './modules/LeaderboardModule'
import PaymentsModule from './modules/PaymentsModule'
import RemoteConfigModule from './modules/RemoteConfigModule'
import ClipboardModule from './modules/ClipboardModule'
import {
    PLATFORM_ID,
    MODULE_NAME,
    EVENT_NAME,
    INTERSTITIAL_STATE,
    REWARDED_STATE,
    BANNER_STATE,
    STORAGE_TYPE,
    VISIBILITY_STATE,
    DEVICE_TYPE,
    PLATFORM_MESSAGE,
} from './constants'

export default class InstantGamesBridge {
    get version(): string;

    get isInitialized(): boolean;

    get platform(): PlatformModule;

    get player(): PlayerModule;

    get game(): GameModule;

    get storage(): StorageModule;

    get advertisement(): AdvertisementModule;

    get social(): SocialModule;

    get device(): DeviceModule;

    get leaderboard(): LeaderboardModule;

    get payments(): PaymentsModule;

    get remoteConfig(): RemoteConfigModule;

    get clipboard(): ClipboardModule;

    get PLATFORM_ID(): PLATFORM_ID;

    get PLATFORM_MESSAGE(): PLATFORM_MESSAGE;

    get MODULE_NAME(): MODULE_NAME;

    get EVENT_NAME(): EVENT_NAME;

    get INTERSTITIAL_STATE(): INTERSTITIAL_STATE;

    get REWARDED_STATE(): REWARDED_STATE;

    get BANNER_STATE(): BANNER_STATE;

    get STORAGE_TYPE(): STORAGE_TYPE;

    get VISIBILITY_STATE(): VISIBILITY_STATE;

    get DEVICE_TYPE(): DEVICE_TYPE;

    initialize(options?: Partial<{
        forciblySetPlatformId: PLATFORM_ID,

        platforms: Partial<{
            'game_distribution': {
                gameId: string
            },
            'vk_play': {
                gameId: string
            }
        }>
    }>): Promise<void>;
}
