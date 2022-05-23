import { ConfigurationState } from "../config/configurationState";
/**
 * Sets the language to display literals in your application
 * @param lang The language to set
 * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
 */
export var setLanguage = function (lang) {
    return ConfigurationState.getInstance().setLanguage(lang);
};
//# sourceMappingURL=setLanguage.js.map