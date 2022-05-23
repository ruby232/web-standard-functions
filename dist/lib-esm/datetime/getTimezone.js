/**
 * Returns the current timezone
 * @return timezone
 */
import { ConfigurationState } from "../config/configurationState";
import { storageKey } from "../datetime/timezone";
export var getTimezone = function () {
    return ConfigurationState.getInstance().getDynStoredValue(storageKey);
};
//# sourceMappingURL=getTimezone.js.map