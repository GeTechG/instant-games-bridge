import ModuleBase from './ModuleBase'

export default class AchievementsModule extends ModuleBase {
    get isSupported(): boolean;

    get isGetListSupported(): boolean;

    get isNativePopupSupported(): boolean;

    unlock(options?: Record<string, any>): Promise<void>;

    getList(options?: Record<string, any>): Promise<any[]>;

    showNativePopup(options?: Record<string, any>): Promise<void>;
}
