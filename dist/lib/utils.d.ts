import type { ValidatorSettings, OpenGraphScraperOptions } from './types';
/**
 * Checks if URL is valid
 *
 * @param {string} url - url to be checked
 * @param {string} urlValidatorSettings - settings used by validator
 * @return {boolean} boolean value if the url is valid
 *
 */
export declare function isUrlValid(url: string, urlValidatorSettings: ValidatorSettings): boolean;
/**
 * Validates and formats url
 *
 * @param {string} url - url to be checked and formatted
 * @param {string} urlValidatorSettings - settings used by validator
 * @return {string} proper url or null
 *
 */
export declare function validateAndFormatURL(url: string, urlValidatorSettings: ValidatorSettings): {
    url: string | null;
};
/**
 * Finds the image type from a given url
 *
 * @param {string} url - url to be checked
 * @return {string} image type from url
 *
 */
export declare function findImageTypeFromUrl(url: string): string;
/**
 * Checks if image type is valid
 *
 * @param {string} type - type to be checked
 * @return {boolean} boolean value if type is value
 *
 */
export declare function isImageTypeValid(type: string): boolean;
/**
 * Checks if URL is a non html page
 *
 * @param {string} url - url to be checked
 * @return {boolean} boolean value if url is non html
 *
 */
export declare function isThisANonHTMLUrl(url: string): boolean;
/**
 * Find and delete nested undefs
 *
 * @param {object} object - object to be cleaned
 * @return {object} object without nested undefs
 *
 */
export declare function removeNestedUndefinedValues(object: {
    [key: string]: any;
}): {
    [key: string]: any;
};
/**
 * Split the options object into ogs and got option objects
 *
 * @param {object} options - options that need to be split
 * @return {object} object with nested options for ogs and got
 *
 */
export declare function optionSetupAndSplit(options: OpenGraphScraperOptions): {
    ogsOptions: OpenGraphScraperOptions;
    gotOptions: Options;
};
interface Options {
    [key: string]: any;
}
/**
 * gotClient - limit the size of the content we fetch when performing the request
 * from https://github.com/sindresorhus/got/blob/main/documentation/examples/advanced-creation.js
 *
 * @param {string} downloadLimit - the download limit, will close connection once it is reached
 * @return {function} got client with download limit
 *
 */
export declare function gotClient(downloadLimit: number | false): Promise<any>;
export {};
