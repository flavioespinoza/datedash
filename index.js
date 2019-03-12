;(function() {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined

    /** Used as the semantic version number. */
    var VERSION = '1.0.5'

    /** Used to map characters to HTML entities. */
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }

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
    var timestamp = function() {
        return root.Date.now()
    }

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
    var getTimestamp = function(date) {
        if (!date) {
            return timestamp()
        }
        return new Date(date).getTime()
    }

    function isObject(value) {
        var type = typeof value
        return value != null && (type == 'object' || type == 'function')
    }
    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `_.propertyOf` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyOf(object) {
        return function(key) {
            return object == null ? undefined : object[key]
        }
    }

    /**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    var escapeHtmlChar = basePropertyOf(htmlEscapes)

    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
        return function(arg) {
            return func(transform(arg))
        }
    }

    /*--------------------------------------------------------------------------*/

    /** Used for built-in method references. */
    var arrayProto = Array.prototype
    var objectProto = Object.prototype

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty

    /** Used to generate unique IDs. */
    var idCounter = 0

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._d

    /** Built-in value references. */
    var objectCreate = Object.create
    var propertyIsEnumerable = objectProto.propertyIsEnumerable

    /* Built-in method references for those with the same name as other `datedash` methods. */
    var nativeIsFinite = root.isFinite,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `datedash` object which
     *
     * @name _
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

    datedash.timestamp = timestamp
    datedash.getTimestamp = getTimestamp

    /*--------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    datedash.VERSION = VERSION

    // Some AMD build optimizers, like r.js, check for condition patterns like:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose datedash on the global object to prevent errors when datedash is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        // Use `_d.noConflict` to remove datedash from the global object.
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
