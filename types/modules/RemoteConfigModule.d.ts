import ModuleBase from './ModuleBase'

interface GetFlagsOptions {
    defaultFlags: object,
    clientFeatures: {name: string, value: any}[]
}

declare class RemoteConfigModule extends ModuleBase {
    readonly isSupported: boolean

    get(options?: GetFlagsOptions): Promise<never>;
}

export default RemoteConfigModule
