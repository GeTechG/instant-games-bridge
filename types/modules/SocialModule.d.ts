import ModuleBase from './ModuleBase'

declare class SocialModule extends ModuleBase {
    readonly isInviteFriendsSupported: boolean

    readonly isJoinCommunitySupported: boolean

    readonly isShareSupported: boolean

    readonly isCreatePostSupported: boolean

    readonly isAddToHomeScreenSupported: boolean

    readonly isAddToFavoritesSupported: boolean

    readonly isRateSupported: boolean

    readonly isExternalLinksAllowed: boolean

    inviteFriends(options: any): Promise<any>;

    joinCommunity(options: any): Promise<any>;

    share(options: any): Promise<any>;

    createPost(options: Promise<any>): Promise<any>;

    addToHomeScreen(): Promise<any>;

    addToFavorites(): Promise<any>;

    rate(): Promise<void>;
}

export default SocialModule
