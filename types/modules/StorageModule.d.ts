import ModuleBase from './ModuleBase'
import { STORAGE_TYPE } from '../constants'

export default class StorageModule extends ModuleBase {
    get defaultType(): typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE];

    isSupported(options: typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE]): boolean;

    isAvailable(options: typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE]): boolean;

    get(key: any, options?: typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE], tryParseJson = true): Promise<any>;

    set(key: any, value: any, options?: typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE]): Promise<any>;

    delete(key: any, options?: typeof STORAGE_TYPE[keyof typeof STORAGE_TYPE]): any;
}
