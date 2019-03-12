const { multiply, subtract } = require('lodash')
const { msPerDay } = require('./utils')
const date = require('./date')
/**
 * Input `_date` subtract `nDays` with `format`
 *
 * @static
 * @memberOf _d
 * @since 1.0.0
 * @category Math
 * @example
 *
 * const any_date = '3/6/19'
 *
 * console.log(subtractDays(any_date, 1, '-'))
 * // => 03-05-2019
 *
 * console.log(subtractDays(any_date, 2, '.'))
 * // => 03.04.2019
 *
 * console.log(subtractDays(any_date, 3, 'uk'))
 * // => 03 Mar 2019
 */
function subtractDays(_date, nDays, format) {
    const timestamp = new Date(_date).getTime()
    const msDays = multiply(nDays, msPerDay)
    const msTotal = subtract(timestamp, msDays)
    return date(msTotal, format)
}

const any_date = '3/6/19'

console.log(subtractDays(any_date, 1, '-'))
console.log(subtractDays(any_date, 2, '.'))
console.log(subtractDays(any_date, 3, 'uk'))

module.exports = subtractDays
