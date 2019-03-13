const _ = require('lodash')
/**
 * Verifies if `value` is a valid `Date object` and valid `Date`.
 *
 * @static
 * @memberOf _d
 * @since 1.0.0
 * @category Date
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `Date object` & valid `Date`, else `false`.
 * @example
 *
 * isDate(new Date())
 * // => true
 *
 * isDate('Jul 4, 1776')
 * // => true
 *
 * isDate('3/3/19')
 * // => true
 *
 * isDate(25200000)
 * // => true
 *
 * isDate('3/33/19')
 * // => false
 *
 * function getDate() {
 *     return '1/1/19'
 * }
 * isDate(getDate)
 * // => false
 *
 * isDate(getDate())
 * // => true
 */
function isDate(value) {
    if (!value || !_.isDate(new Date(value))) {
        return false
    }
    if (value && typeof value === 'boolean') {
        return false
    }
    if (typeof value === 'number') {
        const _timestamp = new Date(value).getTime()
        const _epochTimestamp = 25200000
        if (_timestamp < _epochTimestamp && _timestamp > 0) {
            return false
        }
    }
	return (_.toString(new Date(value)) !== 'Invalid Date')
}

module.exports = isDate
