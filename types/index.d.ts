import PlaygamaBridge from './PlaygamaBridge'

declare global {
    interface Window {
        bridge: PlaygamaBridge;
    }
}

export { PlaygamaBridge }
