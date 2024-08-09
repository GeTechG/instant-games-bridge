import ModuleBase from './ModuleBase'

export interface LeaderboardPlayer {
    id: string;
    name: string;
    score: number;
    rank: number;
    photos: string[];
}

export default class LeaderboardModule extends ModuleBase {
    get isSupported(): boolean;

    get isNativePopupSupported(): boolean;

    get isMultipleBoardsSupported(): boolean;

    get isSetScoreSupported(): boolean;

    get isGetScoreSupported(): boolean;

    get isGetEntriesSupported(): boolean;

    setScore(options: {
        leaderboardName: string;
        score: number;
    }): Promise<void>;

    getScore(options: {
        leaderboardName: string;
    }): Promise<number>;

    getEntries(options: {
        leaderboardName: string;
        includeUser?: boolean;
        quantityAround?: number;
        quantityTop?: number;
    }): Promise<LeaderboardPlayer[]>;

    showNativePopup(options: any): any;
}
