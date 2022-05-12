import { PLATFORM_ID, MODULE_NAME, EVENT_NAME, INTERSTITIAL_STATE, REWARDED_STATE } from './constants'
import PromiseDecorator from './Common/PromiseDecorator'
import PlatformBridgeBase from './PlatformBridges/PlatformBridgeBase'
import VkPlatformBridge from './PlatformBridges/VkPlatformBridge'
import YandexPlatformBridge from './PlatformBridges/YandexPlatformBridge'
import PlatformModule from './Modules/PlatformModule'
import PlayerModule from './Modules/PlayerModule'
import GameModule from './Modules/GameModule'
import AdvertisementModule from './Modules/AdvertisementModule'
import SocialModule from './Modules/SocialModule'
import DeviceModule from './Modules/DeviceModule'
import LeaderboardModule from './Modules/LeaderboardModule'

class InstantGamesBridge {

    get version() {
        return '1.4.1'
    }

    get isInitialized() {
        return this.#isInitialized
    }

    get platform() {
        return this.#getModule(MODULE_NAME.PLATFORM)
    }

    get player() {
        return this.#getModule(MODULE_NAME.PLAYER)
    }

    get game() {
        return this.#getModule(MODULE_NAME.GAME)
    }

    get advertisement() {
        return this.#getModule(MODULE_NAME.ADVERTISEMENT)
    }

    get social() {
        return this.#getModule(MODULE_NAME.SOCIAL)
    }

    get device() {
        return this.#getModule(MODULE_NAME.DEVICE)
    }

    get leaderboard() {
        return this.#getModule(MODULE_NAME.LEADERBOARD)
    }

    get PLATFORM_ID() {
        return PLATFORM_ID
    }

    get MODULE_NAME() {
        return MODULE_NAME
    }

    get EVENT_NAME() {
        return EVENT_NAME
    }

    get INTERSTITIAL_STATE() {
        return INTERSTITIAL_STATE
    }

    get REWARDED_STATE() {
        return REWARDED_STATE
    }

    #isInitialized = false
    #initializationPromiseDecorator = null

    #platformBridge = null
    #modules = { }
    #overriddenModules = { }

    initialize(options) {
        if (this.#isInitialized)
            return Promise.resolve()

        if (!this.#initializationPromiseDecorator) {
            this.#initializationPromiseDecorator = new PromiseDecorator()
            this._options = { ...options }
            this.#createPlatformBridge()
            this.#platformBridge
                .initialize()
                .then(() => {
                    this.#modules[MODULE_NAME.PLATFORM] = new PlatformModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.PLAYER] = new PlayerModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.GAME] = new GameModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.ADVERTISEMENT] = new AdvertisementModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.SOCIAL] = new SocialModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.DEVICE] = new DeviceModule(this.#platformBridge)
                    this.#modules[MODULE_NAME.LEADERBOARD] = new LeaderboardModule(this.#platformBridge)

                    this.#isInitialized = true
                    console.log('%c InstantGamesBridge v.' + this.version + ' initialized. ', 'background: #01A5DA; color: white')

                    if (this.#initializationPromiseDecorator) {
                        this.#initializationPromiseDecorator.resolve()
                        this.#initializationPromiseDecorator = null
                    }
                })
        }

        return this.#initializationPromiseDecorator.promise
    }

    overrideModule(id, value) {
        if (!this.#isInitialized)
            return

        let module = this.#modules[id]
        if (module) {
            this.#overriddenModules[id] = value

            if (typeof value.initialize === 'function')
                value.initialize(module)
        }
    }

    #createPlatformBridge() {
        let url = new URL(window.location.href)
        let yandexUrl = ['g', 'a', 'm', 'e', 's', '.', 's', '3', '.', 'y', 'a', 'n', 'd', 'e', 'x', '.', 'n', 'e', 't'].join('')
        if (url.hostname.includes(yandexUrl))
            this.#platformBridge = new YandexPlatformBridge(this._options && this._options.platforms && this._options.platforms.yandex)
        else if (url.searchParams.has('api_id') && url.searchParams.has('viewer_id') && url.searchParams.has('auth_key'))
            this.#platformBridge = new VkPlatformBridge(this._options && this._options.platforms && this._options.platforms.vk)
        else
            this.#platformBridge = new PlatformBridgeBase()
    }

    #getModule(id) {
        if (this.#overriddenModules[id])
            return this.#overriddenModules[id]

        return this.#modules[id]
    }

}

export default InstantGamesBridge