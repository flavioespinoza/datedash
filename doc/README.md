# <a href="https://github.com/flavioespinoza/datedash">datedash</a> <span>v1.0.49</span>

<!-- div class="toc-container" -->

<!-- div class="import" -->

## `Import`
* <a href="#import">`import`</a>
* <a href="#importModules">`importModules`</a>

<!-- /div -->

<!-- div class="import" -->

## `Require`
* <a href="#require">`require`</a>

<!-- /div -->

<!-- div class="import" -->

## `Date`
* <a href="#_d-date">`_d.date`</a>
* <a href="#_d-now">`_d.now`</a>
* <a href="#_d-getTimestamp">`_d.getTimestamp`</a>
* <a href="#_d-isDate">`_d.isDate`</a>

<!-- /div -->

<!-- div class="import" -->

## `Math`
* <a href="#_d-addDays">`_d.addDays`</a>
* <a href="#_d-subtractDays">`_d.subtractDays`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `Import`

<!-- div -->

<h3 id="import"><code>import</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/import.js">import.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import _d from 'datedash'

_d.date('3/14/2019', 'uk')
// => 14 Mar 2019

_d.addDays('3/6/19', 1, '-')
// => 03-07-2019

_d.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- div -->

<h3 id="importModules"><code>importModules</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/importModules.js">importModules.js</a>

Import individual ES Modules using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
import { addDate, subtractDate } from 'datedash'

addDays('3/6/19', 1, '-')
// => 03-07-2019

subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `Require`

<!-- div -->

<h3 id="require"><code>require</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/require.js">require.js</a>

Import using `esm` or `TypeScript`

#### Since
1.0.0

#### Example
```js
const _d = require('datedash')

_d.date('3/14/2019', 'uk')
// => 14 Mar 2019

_d.addDays('3/6/19', 1, '-')
// => 03-07-2019

_d.subtractDays('3/6/19', 1, '-')
// => 03-05-2019
```
---

<!-- /div -->

<!-- /div -->

<!-- div -->

## `“Date” Methods`

<!-- div -->

<h3 id="_d-date"><code>_d.date(Date, format)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/date.js">date.js</a>

Computes input `date` converts to string and returns with specified `format`.

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*: options are `new Date()`, `timestamp` or `string` in valid date format. See example below.
2. `format` *(string)*:

#### Returns
*(string)*: Returns the date as a String in specified format.

#### Example
```js
let any_date = "1/07/2019"

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
const { defer } = require('lodash')

defer(function(stamp) {
  console.log(_d.now() - stamp)
}, _d.now())

// => Logs milliseconds it took for the deferred invocation.
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
1. `Date` *(date)*: to convert to timestamp.

#### Returns
*(number)*: Returns the timestamp.

#### Example
```js
_d.getTimestamp('July 4 1776')
// => 121244400000

_d.getTimestamp()
// => 1552353178563
// returns now timestamp

_d.getTimestamp('11/4/1973')
// => -6106035604000
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
_d.isDate('3/3/19')
// => true

_d.isDate(new Date())
// => true

_d.isDate('Jul 4 1776')
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

<!-- /div -->

<!-- div -->

## `“Math” Methods`

<!-- div -->

<h3 id="_d-addDays"><code>_d.addDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/addDays.js">addDays.js</a>

Input `_date` add `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(date)*:
2. `days` *(number)*: to add
3. `format` *(string)*:

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

<h3 id="_d-subtractDays"><code>_d.subtractDays(Date, days, format)</code></h3>
<a href="https://github.com/flavioespinoza/datedash/blob/master/methods/subtractDays.js">subtractDays.js</a>

Input `_date` subtract `nDays` with `format`

#### Since
1.0.0

#### Arguments
1. `Date` *(Date)*:
2. `days` *(number)*: to subtract
3. `format` *(string)*:

#### Example
```js
const any_date = '3/6/19'

_d.subtractDays(any_date, 1, '-')
// => 03-05-2019

_d.subtractDays(any_date, 2, '.')
// => 03.04.2019

_d.subtractDays(any_date, 3, 'uk')
// => 03 Mar 2019
```
---

<!-- /div -->

<!-- /div -->

<!-- /div -->
