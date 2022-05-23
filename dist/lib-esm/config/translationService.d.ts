export declare class TranslationService {
    private static instance;
    static getInstance(): TranslationService;
    private constructor();
    private translations;
    private images;
    private loadedTranslations;
    private loadedImages;
    loadTranslations(language: string, data: TranslationsData): Promise<void>;
    loadImages(language: string, theme: string, data: ImagesData): Promise<void>;
    translate(name: string, language?: string): string;
    getImageSource(name: string, language: string, theme: string): string;
    private getHostName;
    private resolveImageKey;
}
export declare class TranslationsData {
    Translations: TranslationsItemData[];
}
export declare class TranslationsItemData {
    M: string;
    T: string;
}
export declare class ImagesData {
    images: ImageData[];
}
export declare class ImageData {
    name: string;
    location: string;
    theme: string;
    lang: string;
}
