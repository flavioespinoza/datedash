# datedash
[See project on GitHub](https://github.com/flavioespinoza/datedash)
lodash inspired `Date` formatting methods.

## Install

yarn

```bash
yarn add datedash
```

npm

```bash
npm i datedash
```

## import

using ES6 modules with [esm](https://github.com/standard-things/esm) or typescript

```js
import _d from 'datedash'

_d.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_d.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

import individual modules

```js
import { getTimestamp } from 'datedash'

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

## require

using CommonJS

```js
const _d = require('datedash')

_d.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_d.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

require individual modules

```js
const { getTimestamp } = require('datedash')

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

## Format options (string)

`format` options `/`, `-`, `.`, `MMM DD YYYY`, `england`, `uk`, `full`

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

## Valid date string inputs
```js
_d.date('3/6/19')
// => 03/06/2019

_d.date('3-6-19')
// => 03/06/2019

_d.date('3.6.19')
// => 03/06/2019

_d.date('Mar 6 19')
// => 03/06/2019

_d.date('Mar 6, 19')
// => 03/06/2019

_d.date('Mar 6 2019')
// => 03/06/2019

_d.date('Mar 6, 2019')
// => 03/06/2019

_d.date('March 6 19')
// => 03/06/2019

_d.date('March 6, 2019')
// => 03/06/2019

_d.date('6 Mar 2019')
// => 03/06/2019

_d.date('6 March 2019')
// => 03/06/2019
```

## Other valid inputs
```js
_d.date()
// => 03/06/2019

_d.date(new Date())
// => 03/06/2019

_d.date(1551875334611)
// => 03/06/2019

_d.date(_.toString(new Date()))
// => 03/06/2019
```

Any date `past`, `present` or `future`
```js
let past_date = 'Feb 14, 2019'

_d.date(past_date)
// => 02/14/2019

_d.date(past_date, '/')
// => 02/14/2019

_d.date(past_date, '-')
// => 02-14-2019

_d.date(past_date, '.')
 // => 02.14.2019

_d.date(past_date, 'MMM DD YYYY')
// => Feb 14 2019

_d.date(past_date, 'england')
// => 14 Feb 2019

_d.date(past_date, 'uk')
// => 14 Feb 2019

_d.date(past_date, 'full')
// => Thu Feb 14 2019 00:00:00 GMT-0700 (Mountain Standard Time)
```

Any `timestamp`
```js
let five_days_ms = 4.32e8
let now_timestamp = _.now() // => 1551875334611
let future_timestamp = _.add(now_timestamp, five_days_ms)
let past_timestamp = _.subtract(now_timestamp, five_days_ms)

_d.date(now_timestamp)
// => 03/06/2019

_d.date(future_timestamp)
// => 03/11/2019

_d.date(past_timestamp)
// => 03/01/2019

```
Handles `undefined` or other for 2nd arg `format`
```js
let my_date = '02/14/2019'

_d.date(my_date, undefined)
// => 02/14/2019

_d.date(my_date, false)
// => 02/14/2019

_d.date(my_date, true)
// => 02/14/2019

_d.date(my_date, 'foo')
// => 02/14/2019

_d.date(my_date, 8)
// => 02/14/2019

_d.date(my_date, null)
// => 02/14/2019

```