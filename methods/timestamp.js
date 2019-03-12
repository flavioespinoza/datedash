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
 * @memberOf _d
 * @since 1.0.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * console.log(_d.timestamp()) // => 1552351582644
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
function timestamp() {
    return root.Date.now()
}
module.exports = timestamp
