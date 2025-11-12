export default class MessageBroker {
    send(message: any, target?: string): void;

    addListener(callback: (event: MessageEvent) => void): void;

    removeListener(callback: (event: MessageEvent) => void): void;

    generateMessageId(): string;
}
