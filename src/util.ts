import {Util} from 'hanif-tiny-http/dist/util';

export const monthsDefined = {
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

export const daysDefined = {
  'senin': 'Monday',
  'selasa': 'Tuesday',
  'rabu': 'Wednesday',
  'kamis': 'Thursday',
  'jumat': 'Friday',
  'sabtu': 'Saturday',
  'minggu': 'Sunday',
};

export interface ResolvedReleaseDate {
    date: number;
    day: string;
    month: string;
};

/**
 * @class OtakUtil
 */
export class OtakUtil extends Util {
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
  static resolveReleaseDate(date: string): ResolvedReleaseDate {
    const skat = date.split(/\s/); // split every space in string.
    const numDate = skat.find((x) => /[0-9]/g.test(x));
    const month = monthsDefined[
            skat[1].toLowerCase() as keyof typeof monthsDefined
    ];
    const day = skat.pop();

    return {
      date: numDate ? parseInt(numDate) : 0,
      day: day === 'None' ? 'Random' : daysDefined[
          day?.toLowerCase() as keyof typeof daysDefined
      ],
      month,
    };
  }
}