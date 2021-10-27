"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtakUtil = exports.daysDefined = exports.monthsDefined = void 0;
const util_1 = require("hanif-tiny-http/dist/util");
exports.monthsDefined = {
    'okt': 'October',
    'mar': 'March',
    'dec': 'December',
    'ags': 'August',
    'apr': 'April',
    'may': 'May',
    'nov': 'November',
    'jan': 'January',
    'sep': 'September',
    'jul': 'July',
    'jun': 'June',
    'feb': 'February',
};
exports.daysDefined = {
    'senin': 'Monday',
    'selasa': 'Tuesday',
    'rabu': 'Wednesday',
    'kamis': 'Thursday',
    'jumat': 'Friday',
    'sabtu': 'Saturday',
    'minggu': 'Sunday',
};
;
/**
 * @class OtakUtil
 */
class OtakUtil extends util_1.Util {
    /**
       * @description OtakUtil constructor
       */
    constructor() {
        super();
    }
    /**
     * @description Resolve release date
     * @param {String} date - (eg. 23 Okt Minggu)
     * @return {ResolvedReleaseDate}
     */
    static resolveReleaseDate(date) {
        const skat = date.split(/\s/); // split every space in string.
        const numDate = skat.find((x) => /[0-9]/g.test(x));
        const month = exports.monthsDefined[skat[1].toLowerCase()];
        const day = skat.pop();
        return {
            date: numDate ? parseInt(numDate) : 0,
            day: day === 'None' ? 'Random' : exports.daysDefined[day === null || day === void 0 ? void 0 : day.toLowerCase()],
            month,
        };
    }
}
exports.OtakUtil = OtakUtil;