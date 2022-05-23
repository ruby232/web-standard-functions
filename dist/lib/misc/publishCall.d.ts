export declare type ResolverFunc<T> = (value: T | PromiseLike<T>) => void;
export declare function publishCall<T>(fnName: string, options: string[], resolver: (option: string, value: T, res: ResolverFunc<T>) => void, ...params: any[]): Promise<T>;
