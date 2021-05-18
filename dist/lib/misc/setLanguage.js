"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLanguage = void 0;
var configurationState_1 = require("../config/configurationState");
/**
 * Sets the language to display literals in your application
 * @param lang The language to set
 * @returns 0 if the language can be set, a value greater than 0 if it cannot be set
 */
exports.setLanguage = function(lang) {
  return configurationState_1.ConfigurationState.getInstance().setLanguage(
    lang
  );
};
//# sourceMappingURL=setLanguage.js.map
