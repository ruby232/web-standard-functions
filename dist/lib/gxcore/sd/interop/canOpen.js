"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canOpen = void 0;
var configurationState_1 = require("../../../config/configurationState");
var knownProtocols = ["http:", "https:", "mailto:", "tel:"];
/**
 * Checks if an URL can be opened
 * @param {string} urlStr
 */
var canOpen = function (urlStr) {
  var baseURL =
    configurationState_1.ConfigurationState.getInstance().getDynStoredValue(
      "SERVICE_HOSTNAME"
    );
  try {
    var url = baseURL ? new URL(urlStr, baseURL) : new URL(urlStr);
    return knownProtocols.includes(url.protocol);
  } catch (e) {
    // could not construct URL object
    return false;
  }
};
exports.canOpen = canOpen;
//# sourceMappingURL=canOpen.js.map
