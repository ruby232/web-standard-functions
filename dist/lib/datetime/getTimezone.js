"use strict";
/**
 * Returns the current timezone
 * @return timezone
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimezone = void 0;
var configurationState_1 = require("../config/configurationState");
var timezone_1 = require("../datetime/timezone");
var getTimezone = function () {
    return configurationState_1.ConfigurationState.getInstance().getDynStoredValue(timezone_1.storageKey);
};
exports.getTimezone = getTimezone;
//# sourceMappingURL=getTimezone.js.map