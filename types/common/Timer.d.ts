export namespace EVENT_NAME {
    let STATE_CHANGED: string;
    let TIME_LEFT_CHANGED: string;
}
export namespace STATE {
    let CREATED: string;
    let STARTED: string;
    let STOPPED: string;
    let COMPLETED: string;
}
export default Timer;
declare class Timer {
    constructor(time: any);
    get state(): string;
    start(): void;
    stop(): void;
    #private;
}
//# sourceMappingURL=Timer.d.ts.map