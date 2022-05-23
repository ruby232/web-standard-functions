/**
 * Makes a target visible. For example, ShowTarget(&quot;Left&quot;) opens the Drawer in an app with Slide Navigation.
 * @param {string} targetName
 */
export declare const showTarget: (targetName: string) => Promise<void>;
/**
 * Hides a target.
 * @param {string} targetName
 */
export declare const hideTarget: (targetName: string) => Promise<void>;
/**
 * Expands a target.
 * @param {string} targetName
 */
export declare const expandTarget: (targetName: string) => Promise<void>;
/**
 * Collapses a target.
 * @param {string} targetName
 */
export declare const collapseTarget: (targetName: string) => Promise<void>;
