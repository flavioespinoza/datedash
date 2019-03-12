const { multiply, add } = require('lodash')
const { msPerDay } = require('./utils')
const date = require('./date')
/**
 * Input `_date` add `nDays` with `format`
 *
 * @static
 * @memberOf _d
 * @since 1.0.0
 * @category Math
 * @example
 *
 * const any_date = '3/6/19'
 *
 * console.log(addDays(any_date, 1, '-'))
 * // => 03-07-2019
 *
 * console.log(addDays(any_date, 2, '.'))
 * // => 03.08.2019
 *
 * console.log(addDays(any_date, 3, 'uk'))
 * // => 09 Mar 2019
 */
function addDays(_date, nDays, format) {
    const timestamp = new Date(_date).getTime()
    const msDays = multiply(nDays, msPerDay)
    const msTotal = add(timestamp, msDays)
    return date(msTotal, format)
}

module.exports = addDays
