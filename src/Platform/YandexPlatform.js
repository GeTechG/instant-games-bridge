import PlatformBase from './PlatformBase'
import PromiseDecorator from '../Common/PromiseDecorator'
import { addJavaScript } from '../Common/utils'
import { INTERSTITIAL_STATE, REWARDED_STATE } from '../Advertisement'

const YANDEX_SDK_URL = 'https://yandex.ru/games/sdk/v2'

class YandexPlatform extends PlatformBase {

    // platform
    get id() {
        return 'yandex'
    }

    get language() {
        if (this._sdk)
            return this._sdk.environment.i18n.lang

        return super.language
    }


    // player
    get isPlayerAuthorizationSupported() {
        return true
    }


    // social
    get isAddToHomeScreenSupported() {
        return this.#isAddToHomeScreenSupported
    }


    #isAddToHomeScreenSupported = false
    #yandexPlayer = null


    initialize() {
        if (this._isInitialized)
            return Promise.resolve()

        if (!this._initializationPromiseDecorator) {
            this._initializationPromiseDecorator = new PromiseDecorator()

            addJavaScript(YANDEX_SDK_URL)
                .then(() => {
                    window.YaGames
                        .init()
                        .then(sdk => {
                            this._sdk = sdk

                            let getPlayerPromise = this.#getPlayer()

                            let getSafeStoragePromise = this._sdk.getStorage()
                                .then(safeStorage => {
                                    this._localStorage = safeStorage
                                })

                            let checkAddToHomeScreenSupported = this._sdk.shortcut.canShowPrompt()
                                .then(prompt => {
                                    this.#isAddToHomeScreenSupported = prompt.canShow
                                })

                            Promise
                                .all([getPlayerPromise, getSafeStoragePromise, checkAddToHomeScreenSupported])
                                .finally(() => {
                                    this._isInitialized = true

                                    if (this._initializationPromiseDecorator) {
                                        this._initializationPromiseDecorator.resolve()
                                        this._initializationPromiseDecorator = null
                                    }
                                })
                        })
                })
        }

        return this._initializationPromiseDecorator.promise
    }


    // player
    authorizePlayer() {
        if (this._authorizationPromiseDecorator == null) {
            this._authorizationPromiseDecorator = new PromiseDecorator()

            if (this._isPlayerAuthorized) {
                this.#getPlayer().then(() => {
                    if (this._authorizationPromiseDecorator) {
                        this._authorizationPromiseDecorator.resolve()
                        this._authorizationPromiseDecorator = null
                    }
                })
            } else {
                this._sdk.auth.openAuthDialog()
                    .then(() => {
                        this.#getPlayer().then(() => {
                            if (this._authorizationPromiseDecorator) {
                                this._authorizationPromiseDecorator.resolve()
                                this._authorizationPromiseDecorator = null
                            }
                        })
                    })
                    .catch(() => {
                        if (this._authorizationPromiseDecorator) {
                            this._authorizationPromiseDecorator.reject()
                            this._authorizationPromiseDecorator = null
                        }
                    })
            }
        }

        return this._authorizationPromiseDecorator.promise
    }


    // game
    getGameData(key) {
        return new Promise(resolve => {
            if (this._gameData) {
                if (typeof this._gameData[key] === 'undefined')
                    resolve(null)
                else
                    resolve(this._gameData[key])

                return
            }

            if (this.#yandexPlayer) {
                this.#yandexPlayer.getData()
                    .then(loadedData => {
                        this._gameData = loadedData
                        if (typeof this._gameData[key] === 'undefined')
                            resolve(null)
                        else
                            resolve(this._gameData[key])
                    })
                    .catch(() => {
                        resolve(null)
                    })

                return
            }

            return super.getGameData(key)
        })
    }

    setGameData(key, value) {
        if (!this._gameData)
            this._gameData = { }

        this._gameData[key] = value
        return this.#saveGameData()
    }

    deleteGameData(key) {
        if (this._gameData) {
            delete this._gameData[key]
            return this.#saveGameData()
        }

        return Promise.resolve()
    }


    // advertisement
    showInterstitial() {
        if (!this._canShowAdvertisement())
            return Promise.reject()

        if (!this._showInterstitialPromiseDecorator) {
            this._showInterstitialPromiseDecorator = new PromiseDecorator()
            this._sdk.adv.showFullscreenAdv({
                callbacks: {
                    onOpen: () => {
                        if (this._showInterstitialPromiseDecorator) {
                            this._showInterstitialPromiseDecorator.resolve()
                            this._showInterstitialPromiseDecorator = null
                        }

                        this._setInterstitialState(INTERSTITIAL_STATE.OPENED)
                    },
                    onClose: wasShown => {
                        if (wasShown) {
                            this._setInterstitialState(INTERSTITIAL_STATE.CLOSED)
                        } else {
                            if (this._showInterstitialPromiseDecorator) {
                                this._showInterstitialPromiseDecorator.reject()
                                this._showInterstitialPromiseDecorator = null
                            }

                            this._setInterstitialState(INTERSTITIAL_STATE.FAILED)
                        }
                    }
                }
            })
        }

        return this._showInterstitialPromiseDecorator.promise
    }

    showRewarded() {
        if (!this._canShowAdvertisement())
            return Promise.reject()

        if (!this._showRewardedPromiseDecorator) {
            this._showRewardedPromiseDecorator = new PromiseDecorator()
            this._sdk.adv.showRewardedVideo({
                callbacks: {
                    onOpen: () => {
                        if (this._showRewardedPromiseDecorator) {
                            this._showRewardedPromiseDecorator.resolve()
                            this._showRewardedPromiseDecorator = null
                        }

                        this._setRewardedState(REWARDED_STATE.OPENED)
                    },
                    onRewarded:  () => {
                        this._setRewardedState(REWARDED_STATE.REWARDED)
                    },
                    onClose: () => {
                        this._setRewardedState(REWARDED_STATE.CLOSED)
                    },
                    onError: error => {
                        if (this._showRewardedPromiseDecorator) {
                            this._showRewardedPromiseDecorator.reject(error)
                            this._showRewardedPromiseDecorator = null
                        }

                        this._setRewardedState(REWARDED_STATE.FAILED)
                    }
                }
            })
        }

        return this._showRewardedPromiseDecorator.promise
    }


    // social
    addToHomeScreen() {
        if (!this.isAddToHomeScreenSupported)
            return Promise.reject()

        if (!this._addToHomeScreenPromiseDecorator) {
            this._addToHomeScreenPromiseDecorator = new PromiseDecorator()

            this._sdk.shortcut.showPrompt()
                .then(result => {
                    if (result.outcome === 'accepted') {
                        if (this._addToHomeScreenPromiseDecorator) {
                            this._addToHomeScreenPromiseDecorator.resolve()
                            this._addToHomeScreenPromiseDecorator = null
                        }

                        return
                    }

                    if (this._addToHomeScreenPromiseDecorator) {
                        this._addToHomeScreenPromiseDecorator.reject()
                        this._addToHomeScreenPromiseDecorator = null
                    }
                })
                .catch(error => {
                    if (this._addToHomeScreenPromiseDecorator) {
                        this._addToHomeScreenPromiseDecorator.reject(error)
                        this._addToHomeScreenPromiseDecorator = null
                    }
                })
        }

        return this._addToHomeScreenPromiseDecorator.promise
    }


    #getPlayer() {
        let scopes = false

        if (this._options && this._options.authorization && this._options.authorization.scopes)
            scopes = this._options.authorization.scopes

        return new Promise(resolve => {
            this._sdk.getPlayer({ scopes })
                .then(player => {
                    this._playerId = player.getUniqueID()
                    this._isPlayerAuthorized = player.getMode() !== 'lite'

                    let name = player.getName()
                    if (name !== '')
                        this._playerName = name

                    this._playerPhotos = []
                    let photoSmall = player.getPhoto('small')
                    let photoMedium = player.getPhoto('medium')
                    let photoLarge = player.getPhoto('large')

                    if (photoSmall)
                        this._playerPhotos.push(photoSmall)

                    if (photoMedium)
                        this._playerPhotos.push(photoMedium)

                    if (photoLarge)
                        this._playerPhotos.push(photoLarge)

                    this.#yandexPlayer = player
                })
                .finally(() => {
                    resolve()
                })
        })
    }

    #saveGameData() {
        return new Promise((resolve, reject) => {
            if (this.#yandexPlayer) {
                this.#yandexPlayer.setData(this._gameData)
                    .then(() => {
                        resolve()
                    })
                    .catch(error => {
                        reject(error)
                    })

                return
            }

            return super._saveGameDataToLocalStorage()
        })
    }

}

export default YandexPlatform