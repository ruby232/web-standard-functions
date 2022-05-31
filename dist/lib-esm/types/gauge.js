var Gauge = /** @class */ (function () {
    function Gauge(json) {
        this.fromJson(json);
    }
    /**
     * Load Gauge object represented by the GaugeSDT.ToJson()
     */
    Gauge.prototype.fromJson = function (json) {
        var _a;
        var sdt;
        try {
            sdt = JSON.parse(json);
        }
        catch (e) {
            sdt = {};
        }
        switch ((_a = sdt.Type) === null || _a === void 0 ? void 0 : _a.toLowerCase()) {
            case "circular":
            case "circle":
                this.type = "circle";
                break;
            case "line":
            default:
                this.type = "line";
                break;
        }
        this.value = sdt.Value || 0;
        this.minValue = sdt.MinValue || 0;
        this.maxValue = sdt.MaxValue || 0;
        this.thickness = sdt.Thickness || 10;
        this.showValue = sdt.ShowValue || false;
        this.showMinMax = sdt.ShowMinMax || false;
        this.ranges = sdt.Ranges
            ? sdt.Ranges.map(function (range) {
                return ({
                    name: range.Name,
                    amount: range.Length,
                    color: range.Color
                });
            })
            : [];
    };
    return Gauge;
}());
export { Gauge };
var GaugeRange = /** @class */ (function () {
    function GaugeRange() {
    }
    return GaugeRange;
}());
export { GaugeRange };
//# sourceMappingURL=gauge.js.map