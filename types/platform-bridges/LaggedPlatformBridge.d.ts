import PlatformBridgeBase from './PlatformBridgeBase'

export default LaggedPlatformBridge
declare class LaggedPlatformBridge extends PlatformBridgeBase {
    initialize(): any;

    leaderboardsSetScore(id: any, score: any): any;

    unlockAchievement(options: any): Promise<any>;
}
