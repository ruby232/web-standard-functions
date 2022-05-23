/**
 * Sets the current timezone
 * @Parm timezone
 */
import { storageKey } from "./timezone";
import { ConfigurationState } from "../config/configurationState";
export var setTimezone = function (timezone) {
    ConfigurationState.getInstance().setDynStoredValue(storageKey, timezone);
};
//# sourceMappingURL=setTimezone.js.map