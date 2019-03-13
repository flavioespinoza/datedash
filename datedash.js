/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash strict category="date" exports="global, node" -d -o ./lodash.js`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {
	'use strict'

	/** Used as the semantic version number. */
	var __package = require('./package.json')

	var VERSION = __package.version

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')()

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module

	/*--------------------------------------------------------------------------*/

	/** Built-in value references. */
	var Symbol = root.Symbol

	/** Used to lookup unminified function names. */
	var realNames = {}

	/*------------------------------------------------------------------------*/

	/**
	 *
	 *
	 * @name _d
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 */
	function lodash() {
		// No operation performed.
	}

	/*------------------------------------------------------------------------*/

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
	const date = require('./methods/date')

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
	 * import { defer } from 'lodash'
	 *
	 * defer(function(stamp) {
	 *   console.log(_d.now() - stamp)
	 * }, _d.now())
	 *
	 * // => Logs milliseconds it took for the deferred invocation.
	 */
	const now = require('./methods/now')

	/*------------------------------------------------------------------------*/

	// Add methods that return unwrapped values in chain sequences.
	lodash.date = date
	lodash.now = now

	/*------------------------------------------------------------------------*/

	/**
	 * The semantic version number.
	 *
	 * @static
	 * @memberOf _
	 * @type {string}
	 */
	lodash.VERSION = VERSION

	/*--------------------------------------------------------------------------*/

	if (freeModule) {
		// Export for Node.js.
		;(freeModule.exports = lodash)._d = lodash
		// Export for CommonJS support.
		freeExports._d = lodash
	} else {
		// Export to the global object.
		root._d = lodash
	}
}.call(this))
