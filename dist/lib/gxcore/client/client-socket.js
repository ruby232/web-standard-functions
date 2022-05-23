"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneXusClientSocket = exports.SocketStatus = void 0;
var socketService_1 = require("../../web/socketService");
var network_1 = require("../sd/network");
var client_information_1 = require("./client-information");
var SocketStatus;
(function (SocketStatus) {
    SocketStatus[SocketStatus["Disconnected"] = 0] = "Disconnected";
    SocketStatus[SocketStatus["Connected"] = 1] = "Connected";
})(SocketStatus = exports.SocketStatus || (exports.SocketStatus = {}));
var GeneXusClientSocket = /** @class */ (function () {
    function GeneXusClientSocket() {
    }
    /**
     * Connects to a Socket Server endpoint using the URL specified in the 'url' property
     * New messages will be published to '{url}.socket.messagereceived' event.
     * New opened connections will be published to '{url}.socket.connected' event.
     * Failed connections will be published to '{url}.socket.connectionfailed' event.
     * Closed connections will be published to '{url}.socket.connectionclosed' event.
     */
    GeneXusClientSocket.open = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.url = resolveUrl(url);
                        return [4 /*yield*/, this.socketService.open(this.url, url)];
                    case 1:
                        _a.sent();
                        this.status = SocketStatus.Connected;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Closes the socket connection.
     */
    GeneXusClientSocket.close = function () {
        this.status = SocketStatus.Disconnected;
        this.socketService.close(this.url);
    };
    /**
     * Sends the data to the currently connected Socket Server.
     * @param {any} data The data to send.
     */
    GeneXusClientSocket.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.socketService.send(this.url, data)];
            });
        });
    };
    GeneXusClientSocket.url = "";
    GeneXusClientSocket.status = SocketStatus.Disconnected;
    GeneXusClientSocket.socketService = socketService_1.default.getInstance();
    return GeneXusClientSocket;
}());
exports.GeneXusClientSocket = GeneXusClientSocket;
var resolveUrl = function (url) {
    var wsUrl = url;
    if (!wsUrl) {
        wsUrl =
            network_1.GeneXusSDNetwork.applicationServerURL()
                .replace("http://", "ws://")
                .replace("https://", "ws://") + "gxwebsocket.svc";
        wsUrl =
            wsUrl.indexOf("?") < 0
                ? wsUrl + "?" + client_information_1.GeneXusClientClientInformation.id
                : wsUrl;
    }
    return wsUrl;
};
//# sourceMappingURL=client-socket.js.map