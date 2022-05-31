import { toString } from "../toString";
import { EMPTY_DATE_VALUE } from "../../date/core";

/* DEFAULT MDY 12 99/99/99 99:99 */
export const testCases1: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/18 01:05:27 PM"],
  [new Date(2018, 0, 30, 9, 9, 9), "01/30/18 09:09:09 AM"],
  [new Date(2018, 0, 30, 9, 9), "01/30/18 09:09:00 AM"],
  [EMPTY_DATE_VALUE, ""]
];

/* DMY 12 99/99/99 99:99 */
export const testCases2: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/18 01:05:27 PM"],
  [new Date(2018, 0, 30, 9, 9, 9), "30/01/18 09:09:09 AM"],
  [new Date(2018, 0, 30, 9, 9), "30/01/18 09:09:00 AM"],
  [EMPTY_DATE_VALUE, ""]
];

/* YMD 12 99/99/99 99:99 */
export const testCases3: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "18/01/01 01:05:27 PM"],
  [new Date(2018, 0, 30, 9, 9, 9), "18/01/30 09:09:09 AM"],
  [new Date(2018, 0, 30, 9, 9), "18/01/30 09:09:00 AM"],
  [EMPTY_DATE_VALUE, ""]
];

/* MDY4 12 99/99/99 99:99 */
export const testCases4: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/18 01:05:27 PM"],
  [new Date(2018, 0, 30, 9, 9, 9), "01/30/18 09:09:09 AM"],
  [new Date(2018, 0, 30, 9, 9), "01/30/18 09:09:00 AM"],
  [EMPTY_DATE_VALUE, ""]
];

/* ------------------------------------------------------- */
/* MDY 24 99/99/99 99:99 */
export const testCases5: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/18 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "01/30/18 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "01/30/18 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

/* DMY 24 99/99/99 99:99 */
export const testCases6: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/18 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "30/01/18 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "30/01/18 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

/* YMD 24 99/99/99 99:99 */
export const testCases7: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "18/01/01 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "18/01/30 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "18/01/30 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

/* ------------------------------------------------------- */

/* MDY 24 99/99/9999 99:99 */
export const testCases8: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/2018 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "01/30/2018 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "01/30/2018 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

/* DMY 24 99/99/9999 99:99 */
export const testCases9: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "01/01/2018 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "30/01/2018 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "30/01/2018 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

/* YMD 24 99/99/9999 99:99 */
export const testCases10: Array<[Date, string]> = [
  [new Date(2018, 0, 1, 13, 5, 27), "2018/01/01 13:05:27"],
  [new Date(2018, 0, 30, 9, 9, 9), "2018/01/30 09:09:09"],
  [new Date(2018, 0, 30, 9, 9), "2018/01/30 09:09:00"],
  [EMPTY_DATE_VALUE, ""]
];

export const testCases11: Array<[Date, string, number, number]> = [
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01:05:27.450 PM", 0, 12],
  [EMPTY_DATE_VALUE, "", 0, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/18 01:05:27.450 PM", 8, 12],
  [EMPTY_DATE_VALUE, "", 8, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 01:05:27.450 PM", 10, 12],
  [EMPTY_DATE_VALUE, "", 10, 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018", 10, 0],
  [EMPTY_DATE_VALUE, "", 10, 0],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01 PM", 10, 2],
  [EMPTY_DATE_VALUE, "", 10, 2],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 01:05 PM", 10, 5],
  [EMPTY_DATE_VALUE, "", 10, 5],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 01:05:27 PM", 10, 8],
  [EMPTY_DATE_VALUE, "", 10, 8],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 01:05:27.450 PM", 10, 12],
  [EMPTY_DATE_VALUE, "", 10, 12]
];

export const testCases12: Array<[
  Date,
  string,
  number,
  number,
  String,
  number
]> = [
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13:05:27.450", 0, 12, "DMY", 24],
  [EMPTY_DATE_VALUE, "", 0, 12, "DMY", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/18 13:05:27.450",
    8,
    12,
    "DMY",
    24
  ],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/18 13:05:27.450",
    8,
    12,
    "DMY4",
    24
  ],
  [EMPTY_DATE_VALUE, "", 8, 12, "DMY", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 13:05:27.450",
    10,
    12,
    "DMY",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "DMY", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018", 10, 0, "DMY", 24],
  [EMPTY_DATE_VALUE, "", 10, 0, "DMY", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13", 10, 2, "DMY", 24],
  [EMPTY_DATE_VALUE, "", 10, 2, "DMY", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018 13:05", 10, 5, "DMY", 24],
  [EMPTY_DATE_VALUE, "", 10, 5, "DMY", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 13:05:27",
    10,
    8,
    "DMY",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 8, "DMY", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 13:05:27.450",
    10,
    12,
    "DMY",
    24
  ],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 13:05:27.450",
    10,
    12,
    "DMY4",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "DMY", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13:05:27.450", 0, 12, "YMD", 24],
  [EMPTY_DATE_VALUE, "", 0, 12, "YMD", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "18/01/01 13:05:27.450",
    8,
    12,
    "YMD",
    24
  ],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "18/01/01 13:05:27.450",
    8,
    12,
    "Y4MD",
    24
  ],
  [EMPTY_DATE_VALUE, "", 8, 12, "YMD", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 13:05:27.450",
    10,
    12,
    "YMD",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "YMD", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "2018/01/01", 10, 0, "YMD", 24],
  [EMPTY_DATE_VALUE, "", 10, 0, "YMD", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "13", 10, 2, "YMD", 24],
  [EMPTY_DATE_VALUE, "", 10, 2, "YMD", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "2018/01/01 13:05", 10, 5, "YMD", 24],
  [EMPTY_DATE_VALUE, "", 10, 5, "YMD", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 13:05:27",
    10,
    8,
    "YMD",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 8, "YMD", 24],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 13:05:27.450",
    10,
    12,
    "YMD",
    24
  ],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 13:05:27.450",
    10,
    12,
    "Y4MD",
    24
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "YMD", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01:05:27.450 PM", 0, 12, "DMY", 12],
  [EMPTY_DATE_VALUE, "", 0, 12, "DMY", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/18 01:05:27.450 PM",
    8,
    12,
    "DMY",
    12
  ],
  [EMPTY_DATE_VALUE, "", 8, 12, "DMY", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 01:05:27.450 PM",
    10,
    12,
    "DMY",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "DMY", 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01/01/2018", 10, 0, "DMY", 12],
  [EMPTY_DATE_VALUE, "", 10, 0, "DMY", 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01 PM", 10, 2, "DMY", 12],
  [EMPTY_DATE_VALUE, "", 10, 2, "DMY", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 01:05 PM",
    10,
    5,
    "DMY",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 5, "DMY", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 01:05:27 PM",
    10,
    8,
    "DMY",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 8, "DMY", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "01/01/2018 01:05:27.450 PM",
    10,
    12,
    "DMY",
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "01/01/2018 01:05:27.450 AM",
    10,
    12,
    "DMY",
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "01/01/2018 01:05:27.450 AM",
    10,
    12,
    "DMY4",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "DMY", 24],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01:05:27.450 PM", 0, 12, "YMD", 12],
  [EMPTY_DATE_VALUE, "", 0, 12, "YMD", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "18/01/01 01:05:27.450 PM",
    8,
    12,
    "YMD",
    12
  ],
  [EMPTY_DATE_VALUE, "", 8, 12, "YMD", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 01:05:27.450 PM",
    10,
    12,
    "YMD",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "YMD", 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "2018/01/01", 10, 0, "YMD", 12],
  [EMPTY_DATE_VALUE, "", 10, 0, "YMD", 12],
  [new Date(2018, 0, 1, 13, 5, 27, 450), "01 PM", 10, 2, "YMD", 12],
  [EMPTY_DATE_VALUE, "", 10, 2, "YMD", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 01:05 PM",
    10,
    5,
    "YMD",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 5, "YMD", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 01:05:27 PM",
    10,
    8,
    "YMD",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 8, "YMD", 12],
  [
    new Date(2018, 0, 1, 13, 5, 27, 450),
    "2018/01/01 01:05:27.450 PM",
    10,
    12,
    "YMD",
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "2018/01/01 01:05:27.450 AM",
    10,
    12,
    "YMD",
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "2018/01/01 01:05:27.450 AM",
    10,
    12,
    "Y4MD",
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "18/01/01 01:05:27.450 AM",
    8,
    12,
    "Y4MD",
    12
  ],
  [EMPTY_DATE_VALUE, "", 10, 12, "YMD", 12],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "01/01/2018 01:05:27.450 AM",
    10,
    12,
    null,
    12
  ],
  [
    new Date(2018, 0, 1, 1, 5, 27, 450),
    "01/01/18 01:05:27.450 AM",
    8,
    12,
    null,
    12
  ]
];

describe("toString operation", () => {
  for (const t of testCases11) {
    it(`toString without parameters, default MDY 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], t[2], t[3])).toEqual(t[1]);
    });
  }

  for (const t of testCases12) {
    it(`toString of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], t[2], t[3], t[4], t[5])).toEqual(t[1]);
    });
  }

  /* -----------------DATE FROMAT--------------------- */
  for (const t of testCases1) {
    it(`toString without parameters, default MDY 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0])).toEqual(t[1]);
    });
  }

  for (const t of testCases1) {
    it(`toString with parameters, MDY 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "MDY", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases2) {
    it(`toString with parameters, default DMY 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "DMY", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases3) {
    it(`toString with parameters, default YMD 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "YMD", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases1) {
    it(`toString without parameters, default MDY4 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "MDY4", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases3) {
    it(`toString without parameters, default Y4MD 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "Y4MD", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases2) {
    it(`toString without parameters, default DMY4 12 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "DMY4", 12, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  /* -------------------------------------------------------------------------------------- */

  /* -----------------TIME FROMAT--------------------- */
  for (const t of testCases5) {
    it(`toString with parameters, MDY 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "MDY", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases6) {
    it(`toString with parameters, default DMY 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "DMY", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases7) {
    it(`toString with parameters, default YMD 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "YMD", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases5) {
    it(`toString without parameters, default MDY4 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "MDY4", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases7) {
    it(`toString without parameters, default Y4MD 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "Y4MD", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases6) {
    it(`toString without parameters, default DMY4 24 99/99/99 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "DMY4", 24, "99/99/99 99:99")).toEqual(
        t[1]
      );
    });
  }

  /* -------------------------------------------------------------------------------------- */

  /* -----------------PICTURE--------------------- */
  for (const t of testCases8) {
    it(`toString with parameters, MDY 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "MDY", 24, "99/99/9999 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases9) {
    it(`toString with parameters, default DMY 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "DMY", 24, "99/99/9999 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases10) {
    it(`toString with parameters, default YMD 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(toString(t[0], null, null, "YMD", 24, "99/99/9999 99:99")).toEqual(
        t[1]
      );
    });
  }

  for (const t of testCases8) {
    it(`toString without parameters, default MDY4 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        toString(t[0], null, null, "MDY4", 24, "99/99/9999 99:99")
      ).toEqual(t[1]);
    });
  }

  for (const t of testCases10) {
    it(`toString without parameters, default Y4MD 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        toString(t[0], null, null, "Y4MD", 24, "99/99/9999 99:99")
      ).toEqual(t[1]);
    });
  }

  for (const t of testCases9) {
    it(`toString without parameters, default DMY4 24 99/99/9999 99:99 of ${t[0]} should be equal to "${t[1]}"`, () => {
      expect(
        toString(t[0], null, null, "DMY4", 24, "99/99/9999 99:99")
      ).toEqual(t[1]);
    });
  }

  /* -------------------------------------------------------------------------------------- */
});
