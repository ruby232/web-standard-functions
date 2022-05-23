export default class SocketService {
    private logger;
    private static instance;
    private connections;
    private constructor();
    static getInstance(): SocketService;
    open(url: string, id?: string): Promise<void>;
    close(url: string): void;
    send(url: string, msg: string): Promise<void>;
    private attachHandlers;
}
