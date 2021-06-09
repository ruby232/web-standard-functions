"use strict";
/**
 * Sets the current timezone
 * @Parm timezone
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTimezone = void 0;
var timezone_1 = require("./timezone");
var configurationState_1 = require("../config/configurationState");
var setTimezone = function (timezone) {
  configurationState_1.ConfigurationState.getInstance().setDynStoredValue(
    timezone_1.storageKey,
    timezone
  );
};
exports.setTimezone = setTimezone;
//# sourceMappingURL=setTimezone.js.map
