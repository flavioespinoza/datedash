/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')()

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * console.log(timestamp()) // => 1552351582644
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var timestamp = function() {
    return root.Date.now()
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * `date` argument. If `date` is `undefined` it gives milliseconds elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Date
 * @param {date} Date to convert to timestamp .
 * @returns {number} Returns the timestamp .
 * @example
 *
 * console.log(getTimestamp()) // => 1552353178563
 * console.log(getTimestamp('11/4/1973')) // => 121244400000
 */
var getTimestamp = function(date) {
    if (!date) {
        return new Date().getTime() 
    }
    return timestamp()
}

module.exports = {
    timestamp,
    getTimestamp
}
