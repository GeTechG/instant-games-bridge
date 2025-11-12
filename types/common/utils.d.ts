export function addJavaScript(src: string, options?: Record<string, any>): Promise<void>;

export function addAdsByGoogle(params: {
    hostId?: string;
    adsenseId: string;
    channelId?: string;
    adFrequencyHint?: string;
}): Promise<void>;

export function createAdvertisementBannerContainer(position: string): HTMLElement;

export function createLoadingOverlay(): HTMLElement;

export function createAdContainer(containerId: string): HTMLElement;

export function showInfoPopup(message: string): Promise<void>;

export function createProgressLogo(showFullLoadingLogo?: boolean): void;

export function waitFor(...args: any[]): Promise<void>;

export function isBase64Image(str: string): boolean;

export function getKeyOrNull(obj: any, key: string): any;

export function getKeysFromObject(keys: string[] | string, data: any, tryParseJson?: boolean): any;

export function deepMerge(firstObject: any, secondObject: any): any;

export function deformatPrice(priceStr: string): number;

export function getGuestUser(): { id: string; name: string };
