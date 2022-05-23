import { browserIdFromAgent } from "./browserCommon";
/**
 * Returns the browser’s version
 * @return string
 */
export function browserVersion() {
    return browserIdFromAgent(navigator.userAgent).version;
}
//# sourceMappingURL=browserVersion.js.map