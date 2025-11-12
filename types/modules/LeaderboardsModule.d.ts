import ModuleBase from './ModuleBase'
import { PLATFORM_ID } from '../constants'

export interface LeaderboardPlayer {
	id: string;
	name: string;
	score: number;
	rank: number;
	photos: string[];
}

// Platform-specific option types
export interface YandexLeaderboardOptions {
	leaderboardName: string;
	score: number;
}

export interface FacebookLeaderboardOptions {
	leaderboardName: string;
	score: number;
}

export interface MsnLeaderboardOptions {
	score: number;
}

export interface LaggedLeaderboardOptions {
	boardId: string;
	score: number;
}

export interface Y8LeaderboardOptions {
	table: string;
	points: number;
}

// Platform-keyed options object
export interface PlatformSetScoreOptions {
	[PLATFORM_ID.YANDEX]?: YandexLeaderboardOptions;
	[PLATFORM_ID.FACEBOOK]?: FacebookLeaderboardOptions;
	[PLATFORM_ID.MSN]?: MsnLeaderboardOptions;
	[PLATFORM_ID.LAGGED]?: LaggedLeaderboardOptions;
	[PLATFORM_ID.Y8]?: Y8LeaderboardOptions;
}

export default class LeaderboardModule extends ModuleBase {
    get type(): string;

    setScore(id: string, score: number): Promise<void>;

    getEntries(id: string): Promise<LeaderboardPlayer[]>;

    showNativePopup(id: string): Promise<void>;
}
