export default SocialModule;
declare class SocialModule extends ModuleBase {
    get isInviteFriendsSupported(): any;
    get isJoinCommunitySupported(): any;
    get isShareSupported(): any;
    get isCreatePostSupported(): any;
    get isAddToHomeScreenSupported(): any;
    get isAddToFavoritesSupported(): any;
    get isRateSupported(): any;
    get isExternalLinksAllowed(): any;
    inviteFriends(options: any): any;
    joinCommunity(options: any): any;
    share(options: any): any;
    createPost(options: any): any;
    addToHomeScreen(): any;
    addToFavorites(): any;
    rate(): any;
}
import ModuleBase from './ModuleBase';
//# sourceMappingURL=SocialModule.d.ts.map