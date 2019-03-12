/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * `date` argument. If `date` is `undefined` it gives milliseconds elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _d
 * @since 1.0.0
 * @category Date
 * @param {date} Date to convert to timestamp .
 * @returns {number} Returns the timestamp .
 * @example
 *
 * console.log(_d.getTimestamp()) // => 1552353178563
 * console.log(_d.getTimestamp('11/4/1973')) // => 121244400000
 */
function getTimestamp(date) {
    if (!date) {
        return Date.now()
    }
    return new Date(date).getTime()
}
module.exports = getTimestamp
