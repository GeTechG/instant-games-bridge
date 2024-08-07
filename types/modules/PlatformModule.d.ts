import ModuleBase from './ModuleBase'
import { PLATFORM_ID, PLATFORM_MESSAGE } from '../constants'

export default class PlatformModule extends ModuleBase {
    get id(): typeof PLATFORM_ID[keyof typeof PLATFORM_ID];

    get sdk(): any;

    get language(): any;

    get payload(): any;

    get tld(): any;

    sendMessage(message: PLATFORM_MESSAGE): any;

    getServerTime(): any;
}
