export default class PromiseDecorator {
    #promise: Promise<any>

    #resolve: (value: any) => void

    #reject: (reason?: any) => void

    constructor();

    get promise(): Promise<any>;

    resolve(data: any): void;

    reject(error: any): void;
}
