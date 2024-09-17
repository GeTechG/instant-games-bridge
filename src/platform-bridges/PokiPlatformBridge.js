import PlatformBridgeBase from './PlatformBridgeBase'
import { waitFor } from '../common/utils'
import {
    PLATFORM_ID,
    ACTION_NAME,
    INTERSTITIAL_STATE,
    REWARDED_STATE,
    PLATFORM_MESSAGE,
} from '../constants'

class PokiPlatformBridge extends PlatformBridgeBase {
    #isGameplayActive = false

    // platform
    get platformId() {
        return PLATFORM_ID.POKI
    }

    get platformLanguage() {
        if (this._platformSdk) {
            return this._platformSdk.getLanguage()
        }

        return super.platformLanguage
    }

    initialize() {
        if (this._isInitialized) {
            return Promise.resolve()
        }

        let promiseDecorator = this._getPromiseDecorator(ACTION_NAME.INITIALIZE)
        if (!promiseDecorator) {
            promiseDecorator = this._createPromiseDecorator(ACTION_NAME.INITIALIZE)

            const existsScript = document.head.querySelector('script[src*="poki-sdk"]') !== null
            if (!existsScript) {
                throw new Error('Poki requires the following script to be added to index.html in the head tag:'
                    + '\n<script src="https://game-cdn.poki.com/scripts/v2/poki-sdk.js"></script>')
            }
            waitFor('PokiSDK', 'init')
                .then(() => {
                    window.PokiSDK.init()
                        .then(() => {
                            this._platformSdk = window.PokiSDK

                            this._isInitialized = true
                            this._resolvePromiseDecorator(ACTION_NAME.INITIALIZE)
                        })
                })
        }

        return promiseDecorator.promise
    }

    // platform
    sendMessage(message) {
        switch (message) {
            case PLATFORM_MESSAGE.GAME_READY: {
                this._platformSdk.gameLoadingFinished()
                return Promise.resolve()
            }
            case PLATFORM_MESSAGE.GAMEPLAY_STARTED: {
                this._platformSdk.gameplayStart()
                this.#isGameplayActive = true
                return Promise.resolve()
            }
            case PLATFORM_MESSAGE.GAMEPLAY_STOPPED: {
                this._platformSdk.gameplayStop()
                this.#isGameplayActive = false
                return Promise.resolve()
            }
            default: {
                return super.sendMessage(message)
            }
        }
    }

    showInterstitial() {
        if (this.#isGameplayActive) {
            this._platformSdk.gameplayStop()
        }
        this._platformSdk.commercialBreak(() => {
            this._setInterstitialState(INTERSTITIAL_STATE.OPENED)
        }).then(() => {
            this._setInterstitialState(INTERSTITIAL_STATE.CLOSED)
            if (this.#isGameplayActive) {
                this._platformSdk.gameplayStart()
            }
        }).catch(() => {
            this._setInterstitialState(INTERSTITIAL_STATE.FAILED)
            if (this.#isGameplayActive) {
                this._platformSdk.gameplayStart()
            }
        })
    }

    showRewarded() {
        if (this.#isGameplayActive) {
            this._platformSdk.gameplayStop()
        }
        this._platformSdk.rewardedBreak(() => {
            this._setRewardedState(REWARDED_STATE.OPENED)
        }).then((success) => {
            if (success) {
                this._setRewardedState(REWARDED_STATE.REWARDED)
            } else {
                this._setRewardedState(REWARDED_STATE.FAILED)
            }
            this._setRewardedState(REWARDED_STATE.CLOSED)
            if (this.#isGameplayActive) {
                this._platformSdk.gameplayStart()
            }
        })
    }
}

export default PokiPlatformBridge
