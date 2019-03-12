const _ = require('lodash')
/**
 *
 * Computes input `date` converts to string and returns with specified `format`.
 *
 * @static
 * @memberOf _d
 * @since 1.0.0
 * @category Date
 * @param {date} Date `date` options are `new Date()`, `timestamp` or `string` in valid date format. See example below. (Not sure if I put valid date string formats here)
 * @param {format} String `format` options `/`, `-`, `.`, `full`, `MMM DD YYYY`, `england`, `uk`
 * @returns {string} Returns the date as a String in specified format.
 * @example
 *
 * // If no value is given for both `date` and `format` defaults to now date (example was done on 03/06/19)
 * console.log(_d.date()) // => 03/06/2019
 *
 * // If no value is given for `format` defaults to now date formatted with the `/` option
 * console.log(date('Jan 7, 2019')) // => 01/07/2019
 *
 * // Formatting options
 * let any_date = 'Jan 7, 2019'
 * console.log(_d.date(any_date)) // => 01/07/2019
 * console.log(_d.date(any_date, '/')) // => 01/07/2019
 * console.log(_d.date(any_date, '-')) // => 01-07-2019
 * console.log(_d.date(any_date, '.')) // => 01.07.2019
 * console.log(_d.date(any_date, 'full')) // => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
 * console.log(_d.date(any_date, 'MMM DD YYYY')) // => Jan 07 2019
 * console.log(_d.date(any_date, 'england')) // => 07 Jan 2019
 * console.log(_d.date(any_date, 'uk')) // => 07 Jan 2019
 * console.log(_d.date(any_date, 'foo')) // => 01/07/2019
 *
 * // Works with these valid date formats (example was done on 03/06/19)
 * console.log(_d.date()) // => 03/06/2019
 * console.log(_d.date(new Date())) // => 03/06/2019
 * console.log(_d.date(1551875334611)) // => 03/06/2019
 * console.log(_d.date(_.toString(new Date()))) // => 03/06/2019
 * console.log(_d.date('3/6/19')) // => 03/06/2019
 * console.log(_d.date('3-6-19')) // => 03/06/2019
 * console.log(_d.date('3.6.19')) // => 03/06/2019
 * console.log(_d.date('Mar 6 19')) // => 03/06/2019
 * console.log(_d.date('Mar 6, 19')) // => 03/06/2019
 * console.log(_d.date('Mar 6 2019')) // => 03/06/2019
 * console.log(_d.date('Mar 6, 2019')) // => 03/06/2019
 * console.log(_d.date('March 6 19')) // => 03/06/2019
 * console.log(_d.date('March 6, 2019')) // => 03/06/2019
 * console.log(_d.date('6 Mar 2019')) // => 03/06/2019
 * console.log(_d.date('6 March 2019')) // => 03/06/2019
 *
 * // Any date past, present or future
 * let past_date = 'Feb 14, 2019'
 * console.log(_d.date(past_date)) // => 02/14/2019
 * console.log(_d.date(past_date, '/')) // => 02/14/2019
 * console.log(_d.date(past_date, '-')) // => 02-14-2019
 * console.log(_d.date(past_date, '.')) // => 02.14.2019
 * console.log(_d.date(past_date, 'full')) // => Thu Feb 14 2019 00:00:00 GMT-0700 (Mountain Standard Time)
 * console.log(_d.date(past_date, 'MMM DD YYYY')) // => Feb 14 2019
 * console.log(_d.date(past_date, 'england')) // => 14 Feb 2019
 * console.log(_d.date(past_date, 'uk')) // => 14 Feb 2019
 *
 * // Any timestamp
 * let five_days_ms = 4.32e+8
 * let now_timestamp = _.now() // => 1551875334611
 * let future_timestamp = _.add(now_timestamp, five_days_ms)
 * let past_timestamp = _.subtract(now_timestamp, five_days_ms)
 * console.log(_d.date(now_timestamp)) // => 03/06/2019
 * console.log(_d.date(future_timestamp)) // => 03/11/2019
 * console.log(_d.date(past_timestamp)) // => 03/01/2019
 *
 * // Handles undefined or other for 2nd arg 'format'
 * console.log(_d.date(my_date, undefined)) // => 02/14/2019
 * console.log(_d.date(my_date, false)) // => 02/14/2019
 * console.log(_d.date(my_date, true)) // => 02/14/2019
 * console.log(_d.date(my_date, 'foo')) // => 02/14/2019
 * console.log(_d.date(my_date, 8)) // => 02/14/2019
 * console.log(_d.date(my_date, null)) // => 02/14/2019
 */
function date(date, format) {
    let d

    if (!date) {
        d = new Date(_.now())
    } else {
        d = new Date(date)
    }

    const pad = s => {
        return s < 10 ? '0' + s : s
    }

    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let year = d.getFullYear()

    let day = [pad(d.getDate())]

    let month_name = months[d.getMonth() + 1]

    let month_number = pad(d.getMonth() + 1)

    let date_usa = [month_number, day, year]

    let date_uk = `${day} ${month_name} ${year}`

    if (format === '/' || format === '-' || format === '.') {
        return date_usa.join(format)
    } else if (format === 'MMM DD YYYY') {
        return [month_name, day, year].join(' ')
    } else if (format === 'full') {
        return d
    } else if (format === 'england' || format === 'uk') {
        return date_uk
    } else {
        return date_usa.join('/')
    }
}
module.exports = date
