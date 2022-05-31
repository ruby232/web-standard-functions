interface GxImage {
    id: string;
    uri: string;
}
export declare const convertImageToFile: (image: GxImage) => Promise<File>;
export {};
