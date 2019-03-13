# <a href="https://github.com/flavioespinoza/datedash">datedash</a> <span>v1.0.27</span>

<!-- div class="toc-container" -->

<!-- div -->

## `Date`
* <a href="#_d-date">`_d.date`</a>
* <a href="#_d-getTimestamp">`_d.getTimestamp`</a>
* <a href="#_d-isDate">`_d.isDate`</a>
* <a href="#_d-now">`_d.now`</a>

<!-- /div -->

<!-- div -->

## `Math`
* <a href="#_d-addDays">`_d.addDays`</a>
* <a href="#_d-subtractDays">`_d.subtractDays`</a>

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

<h3 id="_d-date"><code>_d.date(Date, format)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/date.js">date.js</a>

Computes input `date` converts to string and returns with specified `format`.

#### Since
1.0.0

#### Arguments
1. `Date` *(date): `date` options are `new Date()`, `timestamp` or `string` in valid date format. See example below. &#42;(Not sure if I put valid date string formats here)*&#42;
2. `format` *(string)*: `format` options `/`, `-`, `.`, `full`, `MMM DD YYYY`, `england`, `uk`

#### Returns
*(string)*: Returns the date as a String in specified format.

#### Example
```js
let any_date = 'Jan 7, 2019'

_d.date(any_date, '/')
// => 01/07/2019

_d.date(any_date, '-')
// => 01-07-2019

_d.date(any_date, '.')
// => 01.07.2019

_d.date(any_date, 'MMM DD YYYY')
// => Jan 07 2019

_d.date(any_date, 'england')
// => 07 Jan 2019

_d.date(any_date, 'uk')
// => 07 Jan 2019

_d.date(any_date, 'full')
// => Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```
---

<!-- /div -->

<!-- div -->

<h3 id="_d-getTimestamp"><code>_d.getTimestamp(Date)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/getTimestamp.js">getTimestamp.js</a>

Gets the timestamp of the number of milliseconds that have elapsed since
`date` argument. If `date` is `undefined` it gives milliseconds elapsed since
the Unix epoch *(1 January `1970 00`:00:00 UTC)*.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: to convert to timestamp .

#### Returns
*(number)*: Returns the timestamp .

#### Example
```js
console.log(_d.getTimestamp()) // => 1552353178563
console.log(_d.getTimestamp('11/4/1973')) // => 121244400000
```
---

<!-- /div -->

<!-- div -->

<h3 id="_d-isDate"><code>_d.isDate(value)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/isDate.js">isDate.js</a>

Verifies if `value` is a valid `Date object` and valid `Date`.

#### Since
1.0.0

#### Arguments
1. `value` *(&#42;)*: The value to check.

#### Returns
*(boolean)*: Returns `true` if `value` is a `Date object` & valid `Date`, else `false`.

#### Example
```js
_d.isDate(new Date())
// => true

_d.isDate('Jul 4, 1776')
// => true

_d.isDate('3/3/19')
// => true

_d.isDate(25200000)
// => true

_d.isDate('3/33/19')
// => false

function getDate() {
    return '1/1/19'
}
_d.isDate(getDate)
// => false

_d.isDate(getDate())
// => true
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

## `“Math” Methods`

<!-- div -->

<h3 id="_d-addDays"><code>_d.addDays</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/addDays.js">addDays.js</a>

Input `_date` add `nDays` with `format`

#### Since
1.0.0

#### Example
```js
const any_date = '3/6/19'

_d.addDays(any_date, 1, '-')
// => 03-07-2019

_d.addDays(any_date, 2, '.')
// => 03.08.2019

_d.addDays(any_date, 3, 'uk')
// => 09 Mar 2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="_d-subtractDays"><code>_d.subtractDays</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/subtractDays.js">subtractDays.js</a>

Input `_date` subtract `nDays` with `format`

#### Since
1.0.0

#### Example
```js
const any_date = '3/6/19'

_d.subtractDays(any_date, 1, '-')
// => 03-05-2019

_d.subtractDays(any_date, 2, '.')
// => 03.04.2019

subtractDays(any_date, 3, 'uk')
// => 03 Mar 2019
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
