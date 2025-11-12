import PlatformModule from './modules/PlatformModule'
import PlayerModule from './modules/PlayerModule'
import GameModule from './modules/GameModule'
import StorageModule from './modules/StorageModule'
import AdvertisementModule from './modules/AdvertisementModule'
import SocialModule from './modules/SocialModule'
import DeviceModule from './modules/DeviceModule'
import LeaderboardModule from './modules/LeaderboardsModule'
import PaymentsModule from './modules/PaymentsModule'
import RemoteConfigModule from './modules/RemoteConfigModule'
import ClipboardModule from './modules/ClipboardModule'
import AchievementsModule from './modules/AchievementsModule'
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

export default class PlaygamaBridge {
    get version(): string;

    get isInitialized(): boolean;

    get options(): any;

    get platform(): PlatformModule;

    get player(): PlayerModule;

    get game(): GameModule;

    get storage(): StorageModule;

    get advertisement(): AdvertisementModule;

    get social(): SocialModule;

    get device(): DeviceModule;

    get leaderboard(): LeaderboardModule;

    get leaderboards(): LeaderboardModule;

    get payments(): PaymentsModule;

    get achievements(): AchievementsModule;

    get remoteConfig(): RemoteConfigModule;

    get clipboard(): ClipboardModule;

    get engine(): string;

    set engine(value: string);

    get PLATFORM_ID(): typeof PLATFORM_ID;

    get PLATFORM_MESSAGE(): typeof PLATFORM_MESSAGE;

    get MODULE_NAME(): typeof MODULE_NAME;

    get EVENT_NAME(): typeof EVENT_NAME;

    get INTERSTITIAL_STATE(): typeof INTERSTITIAL_STATE;

    get REWARDED_STATE(): typeof REWARDED_STATE;

    get BANNER_STATE(): typeof BANNER_STATE;

    get STORAGE_TYPE(): typeof STORAGE_TYPE;

    get VISIBILITY_STATE(): typeof VISIBILITY_STATE;

    get DEVICE_TYPE(): typeof DEVICE_TYPE;

    initialize(
		options?: Partial<{
			forciblySetPlatformId: (typeof PLATFORM_ID)[keyof typeof PLATFORM_ID];

			platforms: Partial<{
				game_distribution: {
					gameId: string;
				};
				vk_play: {
					gameId: string;
				};
			}>;
		}>,
	): Promise<void>;
}
