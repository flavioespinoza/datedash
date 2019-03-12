/**
 * @license
 * Datedash <https://flavioespinoza.github.io/datedash/>
 * Released under MIT license
 * Based on Lodash by John-David Dalton, https://github.com/lodash/lodash
 * Based on Lodash.js 4.17.11 <https://raw.githubusercontent.com/lodash/lodash/4.17.11-npm/LICENSE>
 * Based on Lodash.js Copyright JS Foundation and other contributors <https://js.foundation/>
 */
;(function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined

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

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     */
    function isObject(value) {
        var type = typeof value
        return value != null && (type == 'object' || type == 'function')
    }

    /** Built-in value references. */
    var objectCreate = Object.create

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `datedash` object which
     *
     * @name _d
     * @varructor
     * @category Seq
     * @param {*} value The value to wrap in a `datedash` instance.
     * @returns {Object} Returns the new `datedash` wrapper instance.
     * @example
     *
     */
    function datedash(value) {
        return value instanceof DatedashWrapper ? value : new DatedashWrapper(value)
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
        function object() {}
        return function(proto) {
            if (!isObject(proto)) {
                return {}
            }
            if (objectCreate) {
                return objectCreate(proto)
            }
            object.prototype = proto
            var result = new object()
            object.prototype = undefined
            return result
        }
    })()

    /**
     * The base varructor for creating `datedash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function DatedashWrapper(value, chainAll) {
        return value instanceof DatedashWrapper ? value : new DatedashWrapper(value)
    }

    DatedashWrapper.prototype = baseCreate(datedash.prototype)
    DatedashWrapper.prototype.varructor = DatedashWrapper

    /*------------------------------------------------------------------------*/

    // Core Methods
    datedash.date = require('./methods/date')
    datedash.timestamp = require('./methods/timestamp')
    datedash.getTimestamp = require('./methods/getTimestamp')

    // Math Methods
    datedash.add = require('./methods/add')
    datedash.subtract = require('./methods/subtract')

    /*--------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _d
     * @type {string}
     */
    datedash.VERSION = VERSION

    // Some AMD build optimizers, like r.js, check for condition patterns like:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose datedash on the global object to prevent errors when datedash is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        

        // TODO:  Add `_d.noConflict`
        // TODO:  Add to readme: Use `_d.noConflict` to remove datedash from the global object.
        root._d = datedash

        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function() {
            return datedash
        })
    }
    // Check for `exports` after `define` in case a build optimizer adds it.
    else if (freeModule) {
        // Export for Node.js.
        ;(freeModule.exports = datedash)._d = datedash
        // Export for CommonJS support.
        freeExports._d = datedash
    } else {
        // Export to the global object.
        root._d = datedash
    }
}.call(this))
