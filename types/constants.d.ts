export type PLATFORM_ID =
    | 'vk'
    | 'vk_play'
    | 'ok'
    | 'yandex'
    | 'crazy_games'
    | 'absolute_games'
    | 'game_distribution'
    | 'playgama'
    | 'wortal'
    | 'playdeck'
    | 'mock';

export type MODULE_NAME =
    | 'platform'
    | 'player'
    | 'game'
    | 'storage'
    | 'advertisement'
    | 'social'
    | 'device'
    | 'leaderboard'
    | 'payments'
    | 'remote_config'
    | 'clipboard';

export type EVENT_NAME =
    | 'interstitial_state_changed'
    | 'rewarded_state_changed'
    | 'banner_state_changed'
    | 'visibility_state_changed';

export type VISIBILITY_STATE =
    | 'visible'
    | 'hidden';

export type INTERSTITIAL_STATE =
    | 'loading'
    | 'opened'
    | 'closed'
    | 'failed';

export type REWARDED_STATE =
    | 'loading'
    | 'opened'
    | 'closed'
    | 'failed'
    | 'rewarded';

export type BANNER_STATE =
    | 'loading'
    | 'shown'
    | 'hidden'
    | 'failed';

export type STORAGE_TYPE =
    | 'local_storage'
    | 'platform_internal';

export type DEVICE_TYPE =
    | 'desktop'
    | 'mobile'
    | 'tablet'
    | 'tv';

export type PLATFORM_MESSAGE =
    | 'game_ready'
    | 'in_game_loading_started'
    | 'in_game_loading_stopped'
    | 'gameplay_started'
    | 'gameplay_stopped'
    | 'player_got_achievement'
    | 'game_over';

export type ACTION_NAME =
    | 'initialize'
    | 'authorize_player'
    | 'share'
    | 'invite_friends'
    | 'join_community'
    | 'create_post'
    | 'add_to_home_screen'
    | 'add_to_favorites'
    | 'rate'
    | 'set_leaderboard_score'
    | 'get_leaderboard_score'
    | 'get_leaderboard_entries'
    | 'get_purchases'
    | 'get_catalog'
    | 'purchase'
    | 'consume_purchase'
    | 'get_remote_config'
    | 'get_storage_data'
    | 'show_leaderboard_native_popup'
    | 'clipboard_write'
    | 'adblock_detect';

export interface ERROR {
    message: string
}
