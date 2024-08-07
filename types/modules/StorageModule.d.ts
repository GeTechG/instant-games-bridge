import ModuleBase from './ModuleBase'

export default class StorageModule extends ModuleBase {
    get defaultType(): any;

    isSupported(options: any): any;

    isAvailable(options: any): any;

    get(key: any, options?: any): Promise<any>;

    set(key: any, value: any, options?: any): Promise<any>;

    delete(key: any, options: any): any;
}