export declare class Gauge {
    type: "line" | "circle";
    value: number;
    minValue: number;
    maxValue: number;
    thickness: boolean;
    showValue: boolean;
    showMinMax: boolean;
    ranges: GaugeRange[];
    constructor(json: string);
    /**
     * Load Gauge object represented by the GaugeSDT.ToJson()
     */
    fromJson(json: string): void;
}
export declare class GaugeRange {
    name: string;
    amount: number;
    color: string;
}
