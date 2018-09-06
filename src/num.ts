// var FULL_WIDTH_NUMERALS = /[\uFF10-\uFF19]|[\uFF0C-\uFF0E]|\u2015|\u30FC|\uFF0F/g;

// function operation(name, defaultOp, a, b) {
//   var io = gx.lang.instanceOf,
//     dec = typeof gx.num.dec == "undefined" ? null : gx.num.dec.bigDecimal,
//     thSep = gx.thousandSeparator,
//     decPoint = gx.decimalPoint;

//   if (typeof a == "string") a = parseFloat(a, thSep, decPoint);
//   if (typeof b == "string") b = parseFloat(b, thSep, decPoint);

//   if (io(a, dec) && io(b, Number))
//     return a[name](new dec(b.toString())).toString();
//   else if (io(a, Number) && io(b, dec))
//     return new dec(a.toString())[name](b).toString();
//   if ((io(a, Number) && io(b, Number)) || typeof gx.num.dec == "undefined")
//     return defaultOp(a, b);
//   else return a[name](b);
// }

// function str(num, len, dec) {
//   if (typeof num === "string") return num;
//   var sNum;
//   if (typeof len == "undefined") len = 10;
//   if (typeof dec == "undefined" || len - 1 <= dec) dec = 0;
//   sNum = num.toFixed(dec);
//   return sNum.length <= len
//     ? gx.text.padl(sNum, len, " ")
//     : gx.text.padr("", len, "*");
// }

// function maxNumericPrecision() {
//   return 15;
// }

// function extractValue(picture, strnum) {
//   strnum = replaceFullWidthNumerals(strnum);
//   if (gx.lang.instanceOf(strnum, Number) || this.overflowNumber(strnum))
//     return strnum;
//   var pchars,
//     value = strnum === undefined ? "" : strnum;
//   if (picture) {
//     if (picture.charAt(0) == "+" || picture.charAt(0) == "-")
//       pchars = picture.replace(/[\+\-\d,*\.*Z*\s]+/, "");
//     else pchars = picture.replace(/[\d,*\.*Z*\s]+/g, "");

//     if (picture.lastIndexOf(".") != picture.indexOf("."))
//       value = gx.text.replaceAll(value, ".", "");

//     for (var i = 0; i < pchars.length; i++)
//       value = value.replace(pchars.charAt(i), "");
//   }
//   return gx.text.trim(value);
// }

// function formatNumber(
//   number,
//   decimals,
//   picture,
//   digits,
//   sign,
//   errorOnBadNumber
// ) {
//   if (gx.lang.emptyObject(number)) number = "0";
//   var thSep = picture.indexOf(",") != -1 ? gx.thousandSeparator : "";
//   var decSep = gx.decimalPoint;
//   var psplit;
//   var blankWhenZero = false;

//   if (typeof number == "string" && thSep)
//     number = gx.text.replaceAll(number, thSep, "");
//   if (typeof number == "string") number = number.replace(decSep, ".");

//   if (gx.num.overflowNumber(number)) return number;
//   try {
//     number = gx.num.setScale(number, decimals);
//   } catch (e) {
//     number = number.toString();
//   }
//   var f = number.split(".");
//   var i, j;
//   if (!f[0]) f[0] = "0";
//   if (!f[1]) f[1] = "";

//   if (errorOnBadNumber) {
//     if (f[1].length > decimals && f[1].replace(/0*$/, "").length > decimals) {
//       throw "InvalidNumber";
//     } else {
//       var totalDigits = decimals === 0 ? digits : digits - decimals - 1;
//       if (
//         (sign &&
//           f[0].charAt(0) == "-" &&
//           f[0].replace(/0*/, "").length > totalDigits) ||
//         (!sign && f[0].charAt(0) == "-") ||
//         f[0].replace(/[+]?0*/, "").length > totalDigits
//       )
//         throw "InvalidNumber";
//     }
//   }
//   if (number < 0) sign = true;
//   if (f[1].length < decimals) {
//     var g = f[1];
//     for (i = f[1].length + 1; i <= decimals; i++) {
//       g += "0";
//     }
//     f[1] = g;
//   }
//   var signChar = "";
//   if (sign && f[0].charAt(0) == "-") {
//     signChar = "-";
//     f[0] = f[0].substring(1);
//   }
//   if (thSep && f[0].length > 3) {
//     var h = f[0];
//     f[0] = "";
//     for (j = 3; j < h.length; j += 3) {
//       i = h.slice(h.length - j, h.length - j + 3);
//       f[0] = thSep + i + f[0] + "";
//     }
//     j = h.substr(0, h.length % 3 === 0 ? 3 : h.length % 3);
//     f[0] = j + f[0];
//   }
//   decSep = !f[1] ? "" : decSep;

//   if (decimals > 0) {
//     psplit = picture.split(".");
//     if (psplit[1] == gx.text.padr("", decimals, "Z")) blankWhenZero = true;
//   } else {
//     psplit = new Array(picture);
//     if (
//       psplit.length > 0 &&
//       gx.text.replaceAll(gx.text.replaceAll(psplit[0], ",", ""), "Z", "")
//         .length === 0
//     )
//       blankWhenZero = true;
//   }

//   //parte decimal
//   var nidx = 0;
//   var decPart = "";
//   if (psplit.length > 1) {
//     var dpic = psplit[1];
//     for (i = 0; i < dpic.length; i++) {
//       var chd = dpic.charAt(i);
//       if (chd == "9" || chd == "Z")
//         if (f[1].length > nidx) {
//           decPart = decPart + f[1].charAt(nidx);
//           nidx++;
//         } else decPart = decPart + "0";
//       else if (chd != "." && chd != ",") decPart = decPart + chd;
//     }
//   }

//   //parte entera
//   var intPart = "";
//   var epic = psplit[0];
//   nidx = f[0].length - 1;
//   for (i = epic.length - 1; i >= 0; i--) {
//     var ch = epic.charAt(i);
//     if (ch == "9" || ch == "Z")
//       if (nidx >= 0) {
//         if (!(ch == "Z" && f[0].charAt(nidx) === "0" && nidx === 0))
//           intPart = f[0].charAt(nidx) + intPart;
//         nidx--;
//       } else intPart = (ch == "9" ? "0" : "") + intPart;
//     else if (ch != "Z" && ch != ",") intPart = ch + intPart;
//     else if (ch == "," && f[0].charAt(nidx) == thSep) {
//       intPart = f[0].charAt(nidx) + intPart;
//       nidx--;
//     }
//   }
//   if (
//     blankWhenZero &&
//     (intPart == "0" || intPart === "") &&
//     decPart.replace(/0+$/, "").length === 0
//   )
//     return "";
//   else return signChar + intPart + (!decPart ? "" : decSep + decPart);
// }

// function add(a, b) {
//   return operation(
//     "add",
//     function(a, b) {
//       return a + b;
//     },
//     a,
//     b
//   );
// }

// function subtract(a, b) {
//   return operation(
//     "substract",
//     function(a, b) {
//       return a - b;
//     },
//     a,
//     b
//   );
// }

// function multiply(a, b) {
//   return operation(
//     "multiply",
//     function(a, b) {
//       return a * b;
//     },
//     a,
//     b
//   );
// }

// function divide(a, b) {
//   return operation(
//     "divide",
//     function(a, b) {
//       return a / b;
//     },
//     a,
//     b
//   );
// }

// function negate(a) {
//   if (gx.lang.instanceOf(a, Number) || typeof gx.num.dec == "undefined")
//     return -a;
//   else return a.negate();
// }

// function pow(a, b) {
//   return operation(
//     "pow",
//     function(a, b) {
//       return a ^ b;
//     },
//     a,
//     b
//   );
// }

// function mod(a, b) {
//   return operation(
//     "remainder",
//     function(a, b) {
//       return a % b;
//     },
//     a,
//     b
//   );
// }

// function setScale(SVal, Dec) {
//   if (gx.lang.instanceOf(SVal, Number)) return SVal.toFixed(Dec);

//   if (typeof SVal == "string") SVal = gx.text.trim(SVal);
//   if (
//     SVal.length < maxNumericPrecision() ||
//     typeof gx.num.dec == "undefined"
//   ) {
//     if (SVal.length === 0 && Dec === 0) {
//       return "0";
//     } else {
//       var f = SVal.split(".");
//       var i;
//       if (!f[1]) f[1] = "";

//       if (f[1].length < Dec) {
//         var g = f[1];
//         for (i = f[1].length + 1; i <= Dec; i++) {
//           g += "0";
//         }
//         f[1] = g;
//         return f[0] + (f[1] === "" ? "" : ".") + f[1];
//       } else {
//         return Number(parseFloat(SVal)).toFixed(Dec);
//       }
//     }
//   } else
//     return new gx.num.dec.bigDecimal(SVal)
//       .setScale(Dec, gx.num.dec.ROUND_UP)
//       .toString();
// }

// function parseFloat(S, ThSep, DecPoint) {
//   if (gx.lang.instanceOf(S, Number) || this.overflowNumber(S)) return S;
//   var N = this.toInvariant(S, ThSep, DecPoint);
//   if (N.length > this.maxNumericPrecision() && typeof gx.num.dec != "undefined")
//     return new gx.num.dec.bigDecimal(N);
//   else return parseFloat(N);
// }

// function toInvariant(S, ThSep, DecPoint) {
//   if (
//     typeof S == "number" ||
//     (typeof gx.num.dec != "undefined" && S instanceof gx.num.dec.bigDecimal)
//   )
//     return S;
//   else return gx.text.replaceAll(S, ThSep, "").replace(DecPoint, ".");
// }

// function parseInt(S, Radix, ThSep) {
//   if (typeof S == "number") return S;
//   var N = S;
//   N = gx.text.replaceAll(S, ThSep, "");
//   return parseInt(N, Radix);
// }

// function overflowNumber(S) {
//   var regExp = /\*(\**)/;
//   return regExp.test(S);
// }

// function urlDecimal(Control, ThSep, DecPoint) {
//   if (typeof Control != "undefined") {
//     var value = typeof Control.value != "undefined" ? Control.value : Control;
//     value = this.parseFloat(value, ThSep, DecPoint);
//     return value.toString();
//   } else {
//     return "";
//   }
// }

// function random() {
//   return Math.random();
// }

// function intval(num) {
//   var result = 0;
//   if (typeof num != "undefined") {
//     num = num.toString();
//   } else {
//     num = "";
//   }
//   if (
//     num.length < gx.num.maxNumericPrecision() ||
//     typeof gx.num.dec == "undefined"
//   ) {
//     result = parseInt(num, 0);
//   } else {
//     result = new gx.num.dec.bigDecimal(num).setScale(0, gx.num.dec.ROUND_UP);
//   }
//   if (isNaN(result)) result = 0;
//   return result;
// }

// function val(str) {
//   str = gx.text.trim(str).replace(",", ".");
//   var result = this.parseFloat(str);
//   if (isNaN(result)) result = 0;
//   return result;
// }

// function trunc(num, dec) {
//   var result = num;
//   num = num.toString();

//   var decSep = num.indexOf(".");

//   if (decSep != -1) {
//     var intPart = num.substring(0, decSep);

//     if (dec === 0) return Number(intPart);

//     var floatPart = num.substring(decSep + 1, decSep + 1 + dec);

//     num = intPart + "." + floatPart;

//     result = parseFloat(num);
//     if (isNaN(result)) result = 0;
//   }
//   return result;
// }

// function round(n, d) {
//   if (d >= 0)
//     return parseFloat(gx.num.decimalAdjust("round", n, -d).toFixed(d));
//   else return gx.num.roundNeg(n, d);
// }

// function decimalAdjust(type, value, exp) {
//   // If the exp is undefined or zero...
//   if (typeof exp === "undefined" || +exp === 0) {
//     return Math[type](value);
//   }
//   value = +value;
//   exp = +exp;
//   // If the value is not a number or the exp is not an integer...
//   if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
//     return NaN;
//   }
//   // Shift
//   value = value.toString().split("e");
//   value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
//   // Shift back
//   value = value.toString().split("e");
//   return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
// }

// function roundNeg(n, d) {
//   n = n.toString();
//   var xx = n.indexOf(".");
//   var zstr = "0000000000000000000000";
//   var theInt = "";
//   var theFrac = "";
//   var theNo = "";
//   var nx = 0;
//   var xt = parseInt(d, 0) + 1;
//   var rstr = "" + zstr.substring(1, xt);
//   var rfac = "." + rstr + "5";
//   var rfacx = parseFloat(rfac);
//   var result;
//   if (xx == -1) {
//     theFrac = zstr;
//     theInt = "" + n;
//   } else if (xx === 0) {
//     theInt = "0";
//     nx = 0 + parseFloat(n) + parseFloat(rfacx);
//     n = nx + zstr;
//     theFrac = "" + n.substring(1, n.length);
//   } else {
//     nx = parseFloat(n) + rfacx;
//     theInt = nx.toString().substring(0, xx);
//     n = "" + nx + zstr;
//     theFrac = "" + n.substring(xx + 1, xx + 1 + parseInt(d, 0));
//   }
//   theFrac = theFrac.substring(0, parseInt(d, 0));
//   theNo = theInt + "." + theFrac;
//   result = parseFloat(theNo);
//   if (isNaN(result)) result = 0;
//   return result;
// }

// function valid_decimal(Elem, ThSep, DecPoint, Dec) {
//   var ctrlValue = Elem.value;
//   var pointIdx = ctrlValue.lastIndexOf(DecPoint);
//   var validNumber = true;
//   if (
//     DecPoint == "," &&
//     pointIdx == -1 &&
//     ctrlValue.lastIndexOf(".") == ctrlValue.indexOf(".")
//   ) {
//     ctrlValue = ctrlValue.replace(".", DecPoint);
//   }

//   var validStruct = gx.O.getValidStructFld(Elem);
//   if (!gx.lang.emptyObject(validStruct))
//     ctrlValue = gx.num.extractValue(validStruct.pic, ctrlValue);

//   var gx_DecRegExp = new RegExp(
//     "^[ ]*((([+-]{1}[0-9]+)||([0-9]*))(\\" +
//       ThSep +
//       "[0-9]{3})*(\\" +
//       DecPoint +
//       "[0-9]*)?)?[ ]*$"
//   );
//   if (ctrlValue) {
//     if (gx_DecRegExp.test(ctrlValue)) {
//       pointIdx = ctrlValue.lastIndexOf(DecPoint);
//       var newvalue = ctrlValue;
//       if (pointIdx != -1)
//         newvalue = ctrlValue.slice(0, pointIdx + parseInt(Dec, 10) + 1);
//       try {
//         if (!gx.lang.emptyObject(validStruct))
//           newvalue = gx.num.formatNumber(
//             newvalue,
//             validStruct.dec,
//             validStruct.pic,
//             validStruct.len,
//             validStruct.sign,
//             true
//           );
//         if (DecPoint != "." && Elem.tagName == "SELECT")
//           newvalue = gx.num.toInvariant(newvalue, ThSep, DecPoint);
//       } catch (e) {
//         validNumber = false;
//       }
//       if (validNumber && newvalue != gx.text.trim(Elem.value)) {
//         Elem.value = newvalue;
//         if (navigator.userAgent.indexOf("Firefox/2") != -1)
//           //WA For FF 2.0 bug (https://bugzilla.mozilla.org/show_bug.cgi?id=357684)
//           Elem.onchange();
//       }
//     } else {
//       validNumber = false;
//     }
//   } else validNumber = true;
//   if (!validNumber) {
//     gx.csv.setFormatError(Elem);
//     gx.fn.alert(Elem, gx.getMessage("GXM_badnum"));
//   } else {
//     gx.csv.setFormatError(Elem, false);
//   }
// }

// function valid_integer(Elem, ThSep) {
//   var gx_IntRegExp, ctrlValue, validNumber;
//   var vStruct = gx.O.getValidStructFld(Elem);
//   var vStructEO = gx.lang.emptyObject(vStruct);
//   ctrlValue = Elem.value;
//   if (!vStructEO) ctrlValue = gx.num.extractValue(vStruct.pic, ctrlValue);

//   if (!vStructEO && vStruct.pic.indexOf(",") != -1)
//     gx_IntRegExp = new RegExp(
//       "^[ ]*([+-]{1}[0-9]+||[0-9]*)(\\" + ThSep + "[0-9]{3})*[ ]*$"
//     );
//   else gx_IntRegExp = new RegExp("^[ ]*(([+-]{1}[0-9]+)||([0-9]*))[ ]*$");

//   validNumber = true;
//   if (ctrlValue) {
//     if (gx_IntRegExp.test(ctrlValue)) {
//       try {
//         if (!vStructEO)
//           ctrlValue = gx.num.formatNumber(
//             ctrlValue,
//             vStruct.dec,
//             vStruct.pic,
//             vStruct.len,
//             vStruct.sign,
//             true
//           );
//       } catch (e) {
//         validNumber = false;
//       }
//       if (ctrlValue != gx.text.trim(Elem.value)) {
//         Elem.value = ctrlValue;
//         if (navigator.userAgent.indexOf("Firefox/2") != -1)
//           //WA For FF 2.0 bug (https://bugzilla.mozilla.org/show_bug.cgi?id=357684)
//           Elem.onchange();
//       }
//     } else {
//       validNumber = false;
//     }
//   } else validNumber = true;
//   if (!validNumber) {
//     gx.csv.setFormatError(Elem);
//     gx.fn.alert(Elem, gx.getMessage("GXM_badnum"));
//   } else {
//     gx.csv.setFormatError(Elem, false);
//   }
// }

// function replaceFullWidthNumerals(s) {
//   if (typeof s === "string") {
//     return s.replace(FULL_WIDTH_NUMERALS, function(m) {
//       if (m.charCodeAt() == 8213 || m.charCodeAt() == 12540) {
//         return String.fromCharCode(45);
//       }
//       return String.fromCharCode(m.charCodeAt() - 0xfee0);
//     });
//   }
//   return s;
// }
