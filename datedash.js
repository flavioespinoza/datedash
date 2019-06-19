/**
 * @license
 * datedash <https://github.com/flavioespinoza/datedash>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://github.com/flavioespinoza/datedash/blob/master/LICENSE>
 * Based on lodash.js 5.0.0 <https://lodash.com/>
 * Based on lodash.js by John-David Dalton <https://github.com/jdalton>
 */
;
(function () {

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


	"use strict";
	var __importDefault = (this && this.__importDefault) || function (mod) {
		return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	var __importStar = (this && this.__importStar) || function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
		result["default"] = mod;
		return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	const log_log_1 = __importDefault(require("@flavioespinoza/log_log"));
	const lodash_1 = __importDefault(require("lodash"));
	const body_parser_1 = __importDefault(require("body-parser"));
	const cors_1 = __importDefault(require("cors"));
	const dotenv_1 = __importDefault(require("dotenv"));
	const express_1 = __importStar(require("express"));
	const morgan_1 = __importDefault(require("morgan"));
	const socket_io_1 = __importDefault(require("socket.io"));
	// load NODE_ENV from .env
	dotenv_1.default.load();
	/**
	 *
	 * Express Router
	 *
	 * @static
	 * @memberOf _d
	 * @category Math
	 * @param {{routeList:Array}} Array of Objects with http.method and route name
	 * @param {{routeObj:Object}} Object Each object has two properties `method` and `route` and `params`
	 * @param {{routeObj.method}} String `get` or `post` or `put`
	 * @param {{routeObj.route}} String Route name `home` or `profile` or `settings` or `whatevs :)`
	 * @param {{routeObj.params}} Object JSON request query specific to your application
	 * @returns {{router:expres.Router}} Router of specified routes
	 * @example
	 *
	 * const routeList = [
	 *      {
	 *          method: 'get',
	 *          route: 'home',
	 *          params: {}
	 *      },
	 *      {
	 *          method: 'get',
	 *          route: 'profile',
	 *          params: {}
	 *      },
	 *      {
	 *          method: 'get',
	 *          route: 'settings',
	 *          params: {}
	 *      }
	 * ]
	 *
	 * const router = new _d.BuildRoutes(routeList).init()
	 *
	 * const port = 6001
	 *
	 * const app = new _d.AppSocket(port, router).init()
	 *
	 * */
	class BuildRouter {
		constructor(routeList, router) {
			this.routeList = routeList;
			this.router = express_1.Router();
		}
		init() {
			lodash_1.default.each(this.routeList, (obj) => {
				if (obj.method === 'get') {
					this.router.get(obj.route, (req, res, next) => {
						res.send({
							method: 'get',
							route: obj.route,
							sucesss: true
						});
					});
				}
				else if (obj.method === 'post') {
					this.router.post(obj.route, (req, res, next) => {
						res.send({
							method: 'post',
							route: obj.route,
							sucesss: true
						});
					});
				}
				else if (obj.method === 'put') {
					this.router.put(obj.route, (req, res, next) => {
						res.send({
							method: 'put',
							route: obj.route,
							sucesss: true
						});
					});
				}
			});
			return this.router;
		}
	}
	this.BuildRouter = () => {

	}


	/**
	 * Express Math with Socket.io WebSocket
	 *
	 * @static
	 * @memberOf _d
	 * @category Math
	 * @param {{port:Number}} Number 4 Digit integer that the server and socket are listens on
	 * @param {{router:express.Router}} Router built with the _d.BuildRoutes class
	 * @returns {{app:express.Application}} Express Math with Socket.io Websocket
	 * @example
	 *
	 * const router = "Note: the router is the second @param and is built with the BuidlRouter class, See:" _d.BuildRouter
	 *
	 * const port = 6001
	 *
	 * const app = new _d.AppSocket(port, router).init()
	 *
	 * */
	class AppSocket {
		constructor(port, router) {
			this.port = port | 6001;
			this.router = router;
		}
		init() {
			const logger = morgan_1.default('combigned');
			const app = express_1.default();
			app.use(logger);
			app.use(cors_1.default());
			app.use(body_parser_1.default());
			app.use(this.router);
			const server = app.listen(this.port, () => {
				log_log_1.default.info(`app listening on PORT: ${this.port}`);
			});
			const _io = socket_io_1.default.listen(server);
			return app;
		}
	}
	datedash.AppSocket = AppSocket;





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

	}

	/**
	 * Import individual ES Modules using `esm` or `TypeScript`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import { addDate, subtractDate } from 'datedash'
	 *
	 * addDays('3/6/19', 1, '-')
	 * // => 03-07-2019
	 *
	 * subtractDays('3/6/19', 1, '-')
	 * // => 03-05-2019
	 */
	this.importModules = async moduleArr => {

	}

	/*------------------------------------------------------------------------*/

	/**
	 * Import using `esm` or `TypeScript`
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
	this.require = () => {

	}

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
	 * Input `_date` add `nDays` with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.0
	 * @category Math
	 * @param {date} Date
	 * @param {number} days to add
	 * @param {string} format
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
	 * Input `_date` add `nHours`  with `format`
	 *
	 * @static
	 * @memberOf _d
	 * @since 1.0.50
	 * @category Math
	 * @param {date} Date
	 * @param {number} hours to add
	 * @param {('full'|'ts'|'timestamp')} String `full` or `undefined` returns a date object 'Tue Jun 18 2019 22:37:29 GMT-0600 (Mountain Daylight Time)';  `ts` or `timestamp` returns the date as a timestamp 1560919049590
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

	/**
	* Input `_date` subtract `nHours` with `format`
	*
	* @static
	* @memberOf _d
	* @since 1.0.50
	* @category Math
	* @param {date} Date
	* @param {number} hours to subtract
	* @param {('full'|'ts'|'timestamp')} String `full` or `undefined` returns a date object 'Tue Jun 18 2019 22:37:29 GMT-0600 (Mountain Daylight Time)';  `ts` or `timestamp` returns the date as a timestamp 1560919049590
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

	/*------------------------------------------------------------------------*/

	// Date
	datedash.date = date
	datedash.now = now
	datedash.getTimestamp = getTimestamp
	datedash.isDate = isDate

	// Math
	datedash.addDays = addDays
	datedash.addHours = addHours
	datedash.subtractDays = subtractDays
	datedash.subtractHours = subtractHours

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
		;
		(freeModule.exports = datedash)._d = datedash

		// Export for CommonJS support.
		freeExports._d = datedash
	} else {
		// Export to the global object.
		root._d = datedash
	}
}.call(this))