/// <reference types="node" />
import type https from 'https';
import type http from 'http';
import type { RequestOptions, ServerOptions } from 'https';
import type { BrowserOptions, ChromeArgOptions, LaunchOptions, Product } from "puppeteer";
import type { CookieOptions } from 'express';
import type { CorsOptions } from 'cors';
export declare type ServerConfigurationOptions = {
    SERVER_ROOT: string;
    PORT: number | string;
    CORS_OPTIONS?: CorsOptions;
    COOKIE_SETTING?: CookieOptions;
};
export declare type PuppeteerOptions = LaunchOptions & ChromeArgOptions & BrowserOptions & {
    product?: Product;
    extraPrefsFirefox?: Record<string, unknown>;
};
export declare type PageDimensions = {
    width: number;
    height: number;
};
export interface Viewport extends PageDimensions {
    deviceScaleFactor?: number;
    isMobile?: boolean;
    isLandscape?: boolean;
    hasTouch?: boolean;
}
export declare type ServerHostPortSSL = {
    parsedHost: string;
    parsedPort: number;
    parsedSSL: typeof https | typeof http;
    pathname?: string;
};
export declare type ProxyRequestOptions = RequestOptions & ServerOptions;
