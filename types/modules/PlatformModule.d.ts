import ModuleBase from './ModuleBase'
import { PLATFORM_MESSAGE } from '../constants'

export default class PlatformModule extends ModuleBase {
    get id(): any;

    get sdk(): any;

    get language(): any;

    get payload(): any;

    get tld(): any;

    sendMessage(message: PLATFORM_MESSAGE): any;

    getServerTime(): any;
}
