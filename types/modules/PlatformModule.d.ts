import EventLite from 'event-lite'
import ModuleBase from './ModuleBase'
import { PLATFORM_ID, PLATFORM_MESSAGE } from '../constants'

declare class PlatformModule extends ModuleBase {
    get id(): typeof PLATFORM_ID[keyof typeof PLATFORM_ID]

    get sdk(): any

    get language(): string

    get payload(): any

    get tld(): any

    get isGetAllGamesSupported(): boolean

    get isGetGameByIdSupported(): boolean

    get isAudioEnabled(): boolean

    get isPaused(): boolean

    constructor(platformBridge: any)

    sendMessage(message: typeof PLATFORM_MESSAGE[keyof typeof PLATFORM_MESSAGE]): Promise<any>

    getServerTime(): Promise<number>

    getAllGames(): Promise<any>

    getGameById(options?: any): Promise<any>
}

type PlatformModuleEvent = PlatformModule & EventLite;

export default PlatformModuleEvent
