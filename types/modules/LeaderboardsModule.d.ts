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
    get isSupported(): boolean;

    get isNativePopupSupported(): boolean;

    get isMultipleBoardsSupported(): boolean;

    get isSetScoreSupported(): boolean;

    get isGetScoreSupported(): boolean;

    get isGetEntriesSupported(): boolean;

    setScore(id: string, score: number): Promise<void>;

    getScore(options: { leaderboardName: string }): Promise<number>;

    getEntries(id: string): Promise<any>;

    showNativePopup(options: any): any;
}
