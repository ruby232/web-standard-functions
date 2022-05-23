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
exports.ImageData = exports.ImagesData = exports.TranslationsItemData = exports.TranslationsData = exports.TranslationService = void 0;
var configurationState_1 = require("./configurationState");
var getLanguage_1 = require("../misc/getLanguage");
var TranslationService = /** @class */ (function () {
    function TranslationService() {
        this.translations = {};
        this.images = {};
        this.loadedTranslations = {};
        this.loadedImages = {};
    }
    TranslationService.getInstance = function () {
        if (!TranslationService.instance) {
            TranslationService.instance = new TranslationService();
        }
        return TranslationService.instance;
    };
    TranslationService.prototype.loadTranslations = function (language, data) {
        return __awaiter(this, void 0, void 0, function () {
            var msgTranslations_1;
            return __generator(this, function (_a) {
                if (!this.loadedTranslations[language]) {
                    msgTranslations_1 = {};
                    data.Translations.forEach(function (t) { return (msgTranslations_1[t.M] = t.T); });
                    this.translations[language] = msgTranslations_1;
                    this.loadedTranslations[language] = true;
                }
                return [2 /*return*/];
            });
        });
    };
    TranslationService.prototype.loadImages = function (language, theme, data) {
        return __awaiter(this, void 0, void 0, function () {
            var imgTranslations_1;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.loadedImages[language + theme]) {
                    imgTranslations_1 = {};
                    data.images.forEach(function (t) {
                        return (imgTranslations_1[_this.resolveImageKey(t.name, theme)] = "resources/" + t.location);
                    });
                    this.images[language] = imgTranslations_1;
                    this.loadedImages[language + theme] = true;
                }
                return [2 /*return*/];
            });
        });
    };
    TranslationService.prototype.translate = function (name, language) {
        if (language === void 0) { language = undefined; }
        var lang = language !== undefined ? language : getLanguage_1.getLanguage();
        var translation = name;
        if (this.translations[lang] !== undefined) {
            var msgTranslations = this.translations[lang];
            if (msgTranslations[name] !== undefined) {
                translation = msgTranslations[name];
            }
        }
        return translation;
    };
    TranslationService.prototype.getImageSource = function (name, language, theme) {
        var lang = language ? language : getLanguage_1.getLanguage();
        var imageUrl = name;
        if (this.images[lang] !== undefined) {
            var imgTranslations = this.images[lang];
            var key = this.resolveImageKey(name, theme);
            if (imgTranslations[key] !== undefined) {
                imageUrl = imgTranslations[key];
            }
        }
        return this.getHostName() + imageUrl;
    };
    TranslationService.prototype.getHostName = function () {
        var hostName = configurationState_1.ConfigurationState.getInstance().getDynStoredValue("SERVICE_HOSTNAME");
        if (hostName) {
            return hostName;
        }
        else {
            return "";
        }
    };
    TranslationService.prototype.resolveImageKey = function (name, theme) {
        return name + "_" + theme;
    };
    return TranslationService;
}());
exports.TranslationService = TranslationService;
var TranslationsData = /** @class */ (function () {
    function TranslationsData() {
    }
    return TranslationsData;
}());
exports.TranslationsData = TranslationsData;
var TranslationsItemData = /** @class */ (function () {
    function TranslationsItemData() {
    }
    return TranslationsItemData;
}());
exports.TranslationsItemData = TranslationsItemData;
var ImagesData = /** @class */ (function () {
    function ImagesData() {
    }
    return ImagesData;
}());
exports.ImagesData = ImagesData;
var ImageData = /** @class */ (function () {
    function ImageData() {
    }
    return ImageData;
}());
exports.ImageData = ImageData;
//# sourceMappingURL=translationService.js.map