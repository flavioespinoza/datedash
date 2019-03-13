# <a href="https://github.com/flavioespinoza/datedash">datedash</a> <span>v1.0.27</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Date`
* <a href="#_d-date">`_d.date`</a>
* <a href="#_d-now">`_d.now`</a>

<!-- /div -->

<!-- div -->

## `Seq`
* <a href="#_d">`_d`</a>

<!-- /div -->

<!-- div -->

## `Properties`
* <a href="#VERSION">`_.VERSION`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

<h3 id="_d-date"><code>_d.date(Date, String)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/date.js">date.js</a>

Computes input `date` converts to string and returns with specified `format`.

#### Since
1.0.0

#### Arguments
1. `Date` *(date): `date` options are `new Date()`, `timestamp` or `string` in valid date format. See example below. &#42;(Not sure if I put valid date string formats here)*&#42;
2. `String` *(format)*: `format` options `/`, `-`, `.`, `full`, `MMM DD YYYY`, `england`, `uk`

#### Returns
*(string)*: Returns the date as a String in specified format.

#### Example
```js
// If no value is given for both `date` and `format` defaults to now date (example was done on 03/06/19)
console.log(_d.date()) // => 03/06/2019

// If no value is given for `format` defaults to now date formatted with the `/` option
console.log(date('Jan 7, 2019')) // => 01/07/2019

// Formatting options
let any_date = 'Jan 7, 2019'
console.log(_d.date(any_date)) // => 01/07/2019
console.log(_d.date(any_date, '/')) // => 01/07/2019
console.log(_d.date(any_date, '-')) // => 01-07-2019
console.log(_d.date(any_date, '.')) // => 01.07.2019
console.log(_d.date(any_date, 'full')) // => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
console.log(_d.date(any_date, 'MMM DD YYYY')) // => Jan 07 2019
console.log(_d.date(any_date, 'england')) // => 07 Jan 2019
console.log(_d.date(any_date, 'uk')) // => 07 Jan 2019
console.log(_d.date(any_date, 'foo')) // => 01/07/2019

// Works with these valid date formats (example was done on 03/06/19)
console.log(_d.date()) // => 03/06/2019
console.log(_d.date(new Date())) // => 03/06/2019
console.log(_d.date(1551875334611)) // => 03/06/2019
console.log(_d.date(_.toString(new Date()))) // => 03/06/2019
console.log(_d.date('3/6/19')) // => 03/06/2019
console.log(_d.date('3-6-19')) // => 03/06/2019
console.log(_d.date('3.6.19')) // => 03/06/2019
console.log(_d.date('Mar 6 19')) // => 03/06/2019
console.log(_d.date('Mar 6, 19')) // => 03/06/2019
console.log(_d.date('Mar 6 2019')) // => 03/06/2019
console.log(_d.date('Mar 6, 2019')) // => 03/06/2019
console.log(_d.date('March 6 19')) // => 03/06/2019
console.log(_d.date('March 6, 2019')) // => 03/06/2019
console.log(_d.date('6 Mar 2019')) // => 03/06/2019
console.log(_d.date('6 March 2019')) // => 03/06/2019

// Any date past, present or future
let past_date = 'Feb 14, 2019'
console.log(_d.date(past_date)) // => 02/14/2019
console.log(_d.date(past_date, '/')) // => 02/14/2019
console.log(_d.date(past_date, '-')) // => 02-14-2019
console.log(_d.date(past_date, '.')) // => 02.14.2019
console.log(_d.date(past_date, 'full')) // => Thu Feb 14 2019 00:00:00 GMT-0700 (Mountain Standard Time)
console.log(_d.date(past_date, 'MMM DD YYYY')) // => Feb 14 2019
console.log(_d.date(past_date, 'england')) // => 14 Feb 2019
console.log(_d.date(past_date, 'uk')) // => 14 Feb 2019

// Any timestamp
let five_days_ms = 4.32e+8
let now_timestamp = _.now() // => 1551875334611
let future_timestamp = _.add(now_timestamp, five_days_ms)
let past_timestamp = _.subtract(now_timestamp, five_days_ms)
console.log(_d.date(now_timestamp)) // => 03/06/2019
console.log(_d.date(future_timestamp)) // => 03/11/2019
console.log(_d.date(past_timestamp)) // => 03/01/2019

// Handles undefined or other for 2nd arg 'format'
console.log(_d.date(my_date, undefined)) // => 02/14/2019
console.log(_d.date(my_date, false)) // => 02/14/2019
console.log(_d.date(my_date, true)) // => 02/14/2019
console.log(_d.date(my_date, 'foo')) // => 02/14/2019
console.log(_d.date(my_date, 8)) // => 02/14/2019
console.log(_d.date(my_date, null)) // => 02/14/2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_d-now"><code>_d.now()</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/now.js">now.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
import { defer } from 'lodash'

defer(function(stamp) {
  console.log(_d.now() - stamp)
}, _d.now())

// => Logs milliseconds it took for the deferred invocation.
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Seq” Methods`

<!-- div -->

<h3 id="_d"><code>_d(value)</code></h3>
<a href=""></a>



#### Arguments
1. `value` *(&#42;)*: The value to wrap in a `lodash` instance.

#### Returns
*(Object)*: Returns the new `lodash` wrapper instance.

---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Properties`

<!-- div -->

<h3 id="VERSION"><code>_.VERSION</code></h3>
<a href=""></a>

(string): The semantic version number.

---

<!-- /div -->

<!-- /div -->

<!-- /div -->
