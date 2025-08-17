import EventLite from 'event-lite'
import ModuleBase from './ModuleBase'
import { VISIBILITY_STATE } from '../constants'

declare class GameModule extends ModuleBase {
    get visibilityState(): typeof VISIBILITY_STATE[keyof typeof VISIBILITY_STATE]

    setLoadingProgress(percent: number, isFallback?: boolean): void
}

type GameModuleEvent = GameModule & EventLite;

export default GameModuleEvent
