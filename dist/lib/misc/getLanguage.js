"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguage = void 0;
var configurationState_1 = require("../config/configurationState");
/**
 * Returns the name of the currently active Language object
 */
var getLanguage = function () {
    return configurationState_1.ConfigurationState.getInstance().getLanguage();
};
exports.getLanguage = getLanguage;
//# sourceMappingURL=getLanguage.js.map