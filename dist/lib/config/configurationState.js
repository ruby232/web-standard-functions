"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationState = void 0;
var timezone_1 = require("../datetime/timezone");
var storage_1 = require("../common/storage");
var keyPrefix = "gx.config.configurationstate";
var keyDynPtyPrefix = "gx.config.configurationstate.dynpty";
var languageKey = "language";
var validLanguagesKey = "languages";
var defaultLanguageKey = "DEFAULT_LANGUAGE";
var ConfigurationState = /** @class */ (function () {
    function ConfigurationState() {
    }
    ConfigurationState.getInstance = function () {
        if (!ConfigurationState.instance) {
            ConfigurationState.instance = new ConfigurationState();
            ConfigurationState.instance.setDynStoredValue(timezone_1.storageKey, timezone_1.detect());
        }
        return ConfigurationState.instance;
    };
    // Loading model properties
    /**
     * Loads settings from a JSON object
     * @param appSettings The JSON object containing the settings to load
     */
    ConfigurationState.loadApplicationSettings = function (appSettings) {
        var instance = ConfigurationState.getInstance();
        for (var key in appSettings) {
            instance.setDynStoredValue(key, appSettings[key]);
        }
        if (instance.getLanguage() == null) {
            var defaultLanguage = instance.getDynStoredValue(defaultLanguageKey);
            if (defaultLanguage != null) {
                instance.setStoredValue(validLanguagesKey, defaultLanguage);
                instance.setLanguage(defaultLanguage);
            }
        }
    };
    /**
     * Loads properties from the environment
     */
    ConfigurationState.prototype.loadProperties = function (props) {
        this.setStoredValue(validLanguagesKey, props[validLanguagesKey]);
        this.setLanguage(props[languageKey]);
    };
    // Language
    /**
     * Returns the name of the currently active Language object
     */
    ConfigurationState.prototype.getLanguage = function () {
        return this.getStoredValue(languageKey);
    };
    /**
     * Sets the language to display literals in your application
     * @param lang The language to set
     * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
     */
    ConfigurationState.prototype.setLanguage = function (lang) {
        if (this.supportedLanguages().includes(lang)) {
            this.setStoredValue(languageKey, lang);
            return 0;
        }
        else {
            return 1;
        }
    };
    ConfigurationState.prototype.supportedLanguages = function () {
        var languages = this.getStoredValue(validLanguagesKey);
        return languages ? languages.split(",") : [];
    };
    // Generic Properties
    /**
     * Returns generic property value as String
     */
    ConfigurationState.prototype.getProperty = function (pty) {
        return this.getDynStoredValue(pty) || "";
    };
    /**
     * Sets a generic property
     * @param ptyName
     * @param ptyValue
     */
    ConfigurationState.prototype.setProperty = function (ptyName, ptyValue) {
        this.setDynStoredValue(ptyName, ptyValue);
    };
    // Local storage
    ConfigurationState.prototype.getStoredValueWithKey = function (storagekey) {
        return storage_1.storage === null || storage_1.storage === void 0 ? void 0 : storage_1.storage.getItem(storagekey);
    };
    ConfigurationState.prototype.setStoredValueWithKey = function (storagekey, value) {
        storage_1.storage === null || storage_1.storage === void 0 ? void 0 : storage_1.storage.setItem(storagekey, value);
    };
    // Static storage
    ConfigurationState.prototype.storageKey = function (key) {
        return keyPrefix + "." + key;
    };
    ConfigurationState.prototype.getStoredValue = function (key) {
        return this.getStoredValueWithKey(this.storageKey(key));
    };
    ConfigurationState.prototype.setStoredValue = function (key, value) {
        this.setStoredValueWithKey(this.storageKey(key), value);
    };
    // Dynamic storage
    ConfigurationState.prototype.storageDynamicKey = function (key) {
        return keyDynPtyPrefix + "." + key;
    };
    ConfigurationState.prototype.getDynStoredValue = function (key) {
        return this.getStoredValueWithKey(this.storageDynamicKey(key));
    };
    ConfigurationState.prototype.setDynStoredValue = function (key, value) {
        this.setStoredValueWithKey(this.storageDynamicKey(key), value);
    };
    return ConfigurationState;
}());
exports.ConfigurationState = ConfigurationState;
//# sourceMappingURL=configurationState.js.map