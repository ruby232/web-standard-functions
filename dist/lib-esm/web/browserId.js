import { browserIdFromAgent } from "./browserCommon";
/**
 * Returns the browser’s identifier
 * @return number
 */
export function browserId() {
    return browserIdFromAgent(navigator.userAgent).id;
}
//# sourceMappingURL=browserId.js.map