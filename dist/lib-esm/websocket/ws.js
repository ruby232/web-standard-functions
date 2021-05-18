var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import * as log from "loglevel";
var Options = /** @class */ (function() {
  function Options() {
    this.autoReconnect = true;
    this.autoReconnectInterval = 5 * 1000;
    this.maxReconnectAttempts = 10;
  }
  return Options;
})();
export { Options };
var WS = /** @class */ (function() {
  function WS() {
    this.logger = log.getLogger("websocket");
    this.options = new Options();
    this.currentReconnectAttempts = 0;
  }
  /**
   * Connects to a WebSocket Server endpoint using the URL specified.
   * @param {string} url WebSocket server URL.
   * @param {Options} options Connection options (optional).
   */
  WS.prototype.open = function(url, options) {
    return __awaiter(this, void 0, void 0, function() {
      var _this = this;
      return __generator(this, function(_a) {
        return [
          2 /*return*/,
          new Promise(function(resolve, reject) {
            if (!_this.supported()) {
              _this.logger.error("WebSocket is not supported in this browser");
              reject();
              return;
            }
            if (!url.startsWith("ws")) {
              _this.logger.error(
                "Not supported websocket protocol (ws:// or wss:// supported only):",
                url
              );
              reject();
              return;
            }
            _this.options = options || _this.options;
            _this.url = url;
            _this.openImpl(resolve, reject);
          })
        ];
      });
    });
  };
  /**
   * Closes the websocket connection.
   * @param {number} code Error code for closed connection (optional)
   * @param {string} reason Reason description for closed connection (optional)
   */
  WS.prototype.close = function(code, reason) {
    if (this.websocket) {
      this.websocket.close(code, reason);
    }
  };
  /**
   * Send the data to WebSocket Server currently connected.
   * @param {any} data Message data.
   */
  WS.prototype.send = function(data) {
    // TODO: Check if websocket state is open. Otherwise try to reconnect.
    var ok = true;
    try {
      this.websocket.send(data);
    } catch (e) {
      this.logger.error("Send Error", e);
      ok = false;
    }
    return true;
  };
  WS.prototype.openImpl = function(resolve, reject) {
    var _this = this;
    this.websocket = new WebSocket(this.url);
    this.websocket.onopen = function(e) {
      _this.currentReconnectAttempts = 0;
      log.debug("Connection established", _this.url);
      resolve();
      if (_this.onOpen) {
        _this.onOpen(e);
      }
    };
    this.websocket.onmessage = function(e) {
      _this.logger.debug("Message received", e.data);
      if (_this.onMessage) {
        _this.onMessage(e);
      }
    };
    this.websocket.onclose = function(e) {
      switch (e.code) {
        case 1000:
          _this.logger.debug("Connection closed");
          if (_this.onClose) {
            _this.onClose(e);
          }
          reject();
          break;
        default:
          _this.reconnect(resolve, reject);
          break;
      }
    };
    this.websocket.onerror = function(e) {
      _this.logger.error("Connection error", JSON.stringify(e));
      if (_this.onError) {
        _this.onError(e);
      }
      _this.reconnect(resolve, reject);
    };
  };
  WS.prototype.supported = function() {
    return "WebSocket" in (window || global);
  };
  WS.prototype.reconnect = function(resolve, reject) {
    var _this = this;
    if (this.currentReconnectAttempts++ < this.options.maxReconnectAttempts) {
      setTimeout(function() {
        _this.logger.debug("Reconnecting...");
        _this.openImpl(resolve, reject);
      }, this.options.autoReconnectInterval);
    } else {
      reject();
    }
  };
  return WS;
})();
export { WS };
//# sourceMappingURL=ws.js.map
