/**
 * Returns a multimedia item (image, video, audio, etc.) by delegating the call
 * to the generator.
 * @return {string} media
 */
export declare const pickMultimedia: (fnName: string) => Promise<string>;
