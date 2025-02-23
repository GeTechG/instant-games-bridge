import EventLite from 'event-lite'
import ModuleBase from './ModuleBase'
import { VISIBILITY_STATE } from '../constants'

declare class GameModule extends ModuleBase {
    get visibilityState(): typeof VISIBILITY_STATE[keyof typeof VISIBILITY_STATE]
}

type GameModuleEvent = GameModule & EventLite;

export default GameModuleEvent
