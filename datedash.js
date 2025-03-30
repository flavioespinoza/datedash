/**
 * @license
 * datedash <https://github.com/flavioespinoza/datedash>
 * Inspired by lodash.js <https://lodash.com/> by John-David Dalton <https://github.com/jdalton>
 */
;(function () {
	/** Used as the semantic version number. */
	const __package = require('./package.json')

	const VERSION = __package.version

	/** Detect free variable `global` from Node.js. */
	const freeGlobal = typeof global == 'object' && global && global.Object === Object && global

	/** Detect free variable `self`. */
	const freeSelf = typeof self == 'object' && self && self.Object === Object && self

	/** Used as a reference to the global object. */
	const root = freeGlobal || freeSelf || Function('return this')()

	/** Detect free variable `exports`. */
	const freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports

	/** Detect free variable `module`. */
	const freeModule =
		freeExports && typeof module == 'object' && module && !module.nodeType && module

	/*--------------------------------------------------------------------------*/

	/** Built-in value references. */
	const Symbol = root.Symbol

	/** Used to lookup non-minified function names. */
	const realNames = {}

	/*------------------------------------------------------------------------*/

	// Begin Methods

	/*------------------------------------------------------------------------*/

	/**
	 * @private
	 * @name _d
	 * @constructor
	 * @category Seq
	 * @param {*} value The value to wrap in a `datedash` instance.
	 * @returns {Object} Returns the new `datedash` wrapper instance.
	 */
	function datedash() {
		// No operation performed.
	}

	/*------------------------------------------------------------------------*/

	/**
	 * Import using `esm` or `TypeScript`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import _d from 'datedash'
	 *
	 * _d.date('3/14/2019', 'uk')
	 * // => 14 Mar 2019
	 *
	 * _d.addDays('3/6/19', 1, '-')
	 * // => 03-07-2019
	 *
	 * _d.subtractDays('3/6/19', 1, '-')
	 * // => 03-05-2019
	 */
	this.import = () => {
		// No operation performed.
		// Required for doc generation
	}

	/**
	 * Import individual ES Modules using `esm` or `TypeScript`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import { addDays, subtractDays } from 'datedash'
	 *
	 * addDays('3/6/19', 1, '-')
	 * // => 03-07-2019
	 *
	 * subtractDays('3/6/19', 1, '-')
	 * // => 03-05-2019
	 */
	this.importModules = () => {
		// No operation performed.
		// Required for doc generation
	}

	/*------------------------------------------------------------------------*/

	/**
	 * Use require
	 *
	 * @static
	 * @since 1.0.0
	 * @category Require
	 * @example
	 *
	 * const _d = require('datedash')
	 *
	 * _d.date('3/14/2019', 'uk')
	 * // => 14 Mar 2019
	 *
	 * _d.addDays('3/6/19', 1, '-')
	 * // => 03-07-2019
	 *
	 * _d.subtractDays('3/6/19', 1, '-')
	 * // => 03-05-2019
	 */
	this.require = () => {}

	/**
	 *
	 * Computes input `date` converts to string and returns with specified `format`.
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.0
	 * @category Date
	 * @param {date} Date options are `new Date()`, `timestamp` or `string` in valid date format. See example below.
	 * @param {string} format
	 * @returns {string} Returns the date as a String in specified format.
	 * @example
	 *
	 * let any_date = "1/07/2019"
	 *
	 * _d.date(any_date, '/')
	 * // => 01/07/2019
	 *
	 * _d.date(any_date, '-')
	 * // => 01-07-2019
	 *
	 * _d.date(any_date, '.')
	 * // => 01.07.2019
	 *
	 * _d.date(any_date, 'MMM DD YYYY')
	 * // => Jan 07 2019
	 *
	 * _d.date(any_date, 'england')
	 * // => 07 Jan 2019
	 *
	 * _d.date(any_date, 'uk')
	 * // => 07 Jan 2019
	 *
	 * _d.date(any_date, 'full')
	 * // => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
	 *
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
	 * const { defer } = require('lodash')
	 *
	 * defer(function(stamp) {
	 *   console.log(_d.now() - stamp)
	 * }, _d.now())
	 *
	 * // => Logs milliseconds it took for the deferred invocation.
	 */
	const now = require('./methods/now')

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * `date` argument. If `date` is `undefined` it gives milliseconds elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.0
	 * @category Date
	 * @param {date} Date to convert to timestamp.
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _d.getTimestamp('July 4 1776')
	 * // => 121244400000
	 *
	 * _d.getTimestamp()
	 * // => 1552353178563
	 * // returns now timestamp
	 *
	 * _d.getTimestamp('11/4/1973')
	 * // => -6106035604000
	 */
	const getTimestamp = require('./methods/getTimestamp')

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
	 * _d.isDate('3/3/19')
	 * // => true
	 *
	 * _d.isDate(new Date())
	 * // => true
	 *
	 * _d.isDate('Jul 4 1776')
	 * // => true
	 *
	 * _d.isDate(25200000)
	 * // => true
	 *
	 * _d.isDate('3/33/19')
	 * // => false
	 *
	 * function getDate() {
	 *     return '1/1/19'
	 * }
	 * _d.isDate(getDate)
	 * // => false
	 *
	 * _d.isDate(getDate())
	 * // => true
	 */
	const isDate = require('./methods/isDate')

	/**
	 * Input `_date` add `nHours`  with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.50
	 * @category Math
	 * @param {date} Date
	 * @param {number} hours Number of hours to add
	 * @param {string} format 'ts', 'timestamp', 'full', `undefined`, `null`
	 * @returns {date} 'ts' or 'timestamp' return numeric timestamp; 'full', `null`, or `undefined` return a complete Date object
	 * @example
	 *
	 * let now_date_full = new Date()
	 * // => Tue Jun 18 2019 23:17:10 GMT-0600 (Mountain Daylight Time)
	 * let now_date_ts = _d.getTimestamp(now_date_full)
	 * // => 1560921430024
	 *
	 * // Add 1hr return full date object
	 * let add_1hr = _d.addHours(now_date_full, 1, 'full')
	 * // => Wed Jun 19 2019 00:17:10 GMT-0600 (Mountain Daylight Time)
	 *
	 * // Add 1hr return timestamp
	 * let add_1hr_ts = _d.addHours(now_date_full, 1, 'ts')
	 * // => 1560925030024
	 */
	const addHours = require('./methods/addHours')

	/**
	 * Input `_date` subtract `nHours` with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.50
	 * @category Math
	 * @param {date} Date
	 * @param {number} hours to subtract
	 * @param {string} String "full", null or undefined returns a date object 'Tue Jun 18 2019 22:37:29 GMT-0600 (Mountain Daylight Time)';  "ts" or "timestamp" returns the date as a timestamp 1560919049590
	 * @example
	 *
	 * let now_date_full = new Date()
	 * // => Tue Jun 18 2019 23:23:30 GMT-0600 (Mountain Daylight Time)
	 * let now_date_ts = _d.getTimestamp(now_date_full)
	 * // => 1560921810079
	 *
	 * // Subtract 1hr return full date object
	 * let add_1hr = _d.subtractHours(now_date_full, 1, 'full')
	 * // => Tue Jun 18 2019 22:23:30 GMT-0600 (Mountain Daylight Time)
	 *
	 * // Subtract 1hr return timestamp
	 * let add_1hr_ts = _d.subtractHours(now_date_full, 1, 'ts')
	 * // => 1560918210079
	 */
	const subtractHours = require('./methods/subtractHours')

	/**
	 * Input `_date` add `nDays` with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.0
	 * @category Math
	 * @param {date} Date
	 * @param {number} days to add
	 * @param {string} format 'ts', 'timestamp', 'full', `undefined`, `null`
	 * @returns {date} 'ts' or 'timestamp' return numeric timestamp; 'full', `null`, or `undefined` return a complete Date object
	 * @example
	 *
	 * const any_date = '3/6/19'
	 *
	 * _d.addDays(any_date, 1, '-')
	 * // => 03-07-2019
	 *
	 * _d.addDays(any_date, 2, '.')
	 * // => 03.08.2019
	 *
	 * _d.addDays(any_date, 3, 'uk')
	 * // => 09 Mar 2019
	 */
	const addDays = require('./methods/addDays')

	/**
	 * Input `_date` subtract `nDays` with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.0
	 * @category Math
	 * @param {Date} Date
	 * @param {number} days to subtract
	 * @param {string} format
	 * @example
	 *
	 * const any_date = '3/6/19'
	 *
	 * _d.subtractDays(any_date, 1, '-')
	 * // => 03-05-2019
	 *
	 * _d.subtractDays(any_date, 2, '.')
	 * // => 03.04.2019
	 *
	 * _d.subtractDays(any_date, 3, 'uk')
	 * // => 03 Mar 2019
	 */
	const subtractDays = require('./methods/subtractDays')

	/*------------------------------------------------------------------------*/

	/**
	 * Test of: `yarn add https://github.com/flavioespinoza/datedash.git#master`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Yarn
	 * @example
	 *
	 * import _d from 'datedash'
	 *
	 * _d.yarnTest()
	 *
	 */
	const yarnTest = () => {
		console.log('yarn_test SUCCESS!')
		return {
			val: 'yarn_test',
			key: 'Yarn Test Success'
		}
	}

	/*------------------------------------------------------------------------*/

	/**
	 * Test of: `yarn add https://github.com/flavioespinoza/datedash.git#master`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Yarn
	 * @example
	 *
	 * import _d from 'datedash'
	 *
	 * _d.yarnTest2()
	 *
	 */
	const yarnTest2 = () => {
		console.log('yarnTest2 SUCCESS!')
		return {
			val: 'yarn_test_2',
			key: 'Yarn Test 2 Success',
			date: new Date()
		}
	}

	/*------------------------------------------------------------------------*/

	// Date
	datedash.date = date
	datedash.now = now
	datedash.getTimestamp = getTimestamp
	datedash.isDate = isDate

	// Yarn
	datedash.yarnTest = yarnTest
	datedash.yarnTest2 = yarnTest2

	// Math Hours
	datedash.addHours = addHours
	datedash.subtractHours = subtractHours

	// Math Days
	datedash.addDays = addDays
	datedash.subtractDays = subtractDays

	/*------------------------------------------------------------------------*/

	/**
	 * The semantic version number.
	 * @private
	 * @static
	 * @memberOf _d
	 * @type {string}
	 */
	datedash.VERSION = VERSION

	/*--------------------------------------------------------------------------*/

	if (freeModule) {
		// Export for Node.js.
		;(freeModule.exports = datedash)._d = datedash
		// Export for CommonJS support.
		freeExports._d = datedash
	} else {
		// Export to the global object.
		root._d = datedash
	}
}).call(this)
