import { ConfigurationState } from "../config/configurationState";
/**
 * Returns the name of the currently active Language object
 */
export var getLanguage = function () {
    return ConfigurationState.getInstance().getLanguage();
};
//# sourceMappingURL=getLanguage.js.map