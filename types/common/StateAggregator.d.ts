export default class StateAggregator {
    constructor(stateKeys: string[], callback: (aggregatedState: boolean) => void);

    setState(key: string, value: boolean): void;

    getState(key: string): boolean;

    getAggregatedState(): boolean;

    resetAll(): void;
}
