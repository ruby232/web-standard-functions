interface GxImage {
    id: string;
    uri: string;
}
/**
 * @param image
 * @param text
 * @param url
 * @param title
 */
export declare const shareImage: (image: GxImage, text?: string, url?: string, title?: string) => Promise<void>;
export {};
