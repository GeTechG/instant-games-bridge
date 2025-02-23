import ModuleBase from './ModuleBase'
import { DEVICE_TYPE } from '../constants'

declare class DeviceModule extends ModuleBase {
    readonly type: typeof DEVICE_TYPE[keyof typeof DEVICE_TYPE]
}

export default DeviceModule
