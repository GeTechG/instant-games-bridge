import ModuleBase from './ModuleBase'

export default class PlayerModule extends ModuleBase {
    get isAuthorizationSupported(): boolean;

    get isAuthorized(): boolean;

    get id(): any | null;

    get name(): string | null;

    get photos(): string[];

    authorize(options?: {
        scopes?: boolean;
    }): Promise<void>;
}
