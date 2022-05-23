"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneXusSDSynchronizationSynchronizationEvents = void 0;
/* tslint:disable:no-empty */
var GeneXusSDSynchronizationSynchronizationEvents = /** @class */ (function () {
    function GeneXusSDSynchronizationSynchronizationEvents() {
    }
    /**
     * Checks if there are any pending changes to submit to the server.
     * @param {number} eventStatus
     * @return {boolean} Current implementation returns always `false`.
     */
    GeneXusSDSynchronizationSynchronizationEvents.hasEvents = function (eventStatus) {
        return false;
    };
    /**
     * Accesses the stored events for processing.
     * @param {number} eventStatus
     * @return {any[]} Current implementation returns an empty array.
     */
    GeneXusSDSynchronizationSynchronizationEvents.getEvents = function (eventStatus) {
        return [];
    };
    /**
     * Marks as pending an events in order to try sending it again later
     *
     * Current implementation does nothing.
     * @param {GUID} eventGUID
     */
    GeneXusSDSynchronizationSynchronizationEvents.markEventAsPending = function (eventGUID) {
        // Empty implemetation
    };
    /**
     * Removes some registry of the GXPendingEvents table.
     *
     * Current implementation does nothing.
     * @param {GUID} eventGUID
     */
    GeneXusSDSynchronizationSynchronizationEvents.removeEvent = function (eventGUID) {
        // Empty implemetation
    };
    return GeneXusSDSynchronizationSynchronizationEvents;
}());
exports.GeneXusSDSynchronizationSynchronizationEvents = GeneXusSDSynchronizationSynchronizationEvents;
//# sourceMappingURL=synchronizationEvents.js.map