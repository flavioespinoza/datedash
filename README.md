# datedash

lodash inspired `Date` formatting methods.

## Docs

[datedash/docs](https://flavioespinoza.github.io/datedash)

## Install

yarn

```bash
yarn add datedash
```

## import

using ES6 modules

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

using require

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
const _ = require('lodash')

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

## Testing

Clone repo:

```bash
git clone https://github.com/flavioespinoza/datedash.git
```

CD into datedash directory:

```bash
cd <your-path>/datedash
```

Install dependencies:

```bash
yarn
```

Run tests:

```bash
yarn run test
```

Test expected output:

```bash
  add
    ✓ should add two numbers
    ✓ should not coerce arguments to numbers

  addDays
    ✓ should add 1 day '3/6/19' format '-' return '03-07-2019'
    ✓ should add 2 day '3/6/19' format '.' return '03.08.2019'
    ✓ should add 3 day '3/6/19' format 'uk' return '09 Mar 2019'

  date format options
    ✓ format '/' should return '01/07/2019'
    ✓ format '-' should return '01-07-2019'
    ✓ format '.' should return '01.07.2019'
    ✓ format 'england' should return '07 Jan 2019'
    ✓ format 'uk' should return '07 Jan 2019'
    ✓ format 'full' should return 'Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)'

  date valid string input with all format options
    date input '1/7/19' converted to all formats
      ✓ date 1/7/19 with format / should return 01/07/2019
      ✓ date 1/7/19 with format - should return 01-07-2019
      ✓ date 1/7/19 with format . should return 01.07.2019
      ✓ date 1/7/19 with format england should return 07 Jan 2019
      ✓ date 1/7/19 with format uk should return 07 Jan 2019
    date input '1-7-19' converted to all formats
      ✓ date 1-7-19 with format / should return 01/07/2019
      ✓ date 1-7-19 with format - should return 01-07-2019
      ✓ date 1-7-19 with format . should return 01.07.2019
      ✓ date 1-7-19 with format england should return 07 Jan 2019
      ✓ date 1-7-19 with format uk should return 07 Jan 2019
    date input '1.7.19' converted to all formats
      ✓ date 1.7.19 with format / should return 01/07/2019
      ✓ date 1.7.19 with format - should return 01-07-2019
      ✓ date 1.7.19 with format . should return 01.07.2019
      ✓ date 1.7.19 with format england should return 07 Jan 2019
      ✓ date 1.7.19 with format uk should return 07 Jan 2019
    date input 'Jan 7 19' converted to all formats
      ✓ date Jan 7 19 with format / should return 01/07/2019
      ✓ date Jan 7 19 with format - should return 01-07-2019
      ✓ date Jan 7 19 with format . should return 01.07.2019
      ✓ date Jan 7 19 with format england should return 07 Jan 2019
      ✓ date Jan 7 19 with format uk should return 07 Jan 2019
    date input 'January 7 19' converted to all formats
      ✓ date January 7 19 with format / should return 01/07/2019
      ✓ date January 7 19 with format - should return 01-07-2019
      ✓ date January 7 19 with format . should return 01.07.2019
      ✓ date January 7 19 with format england should return 07 Jan 2019
      ✓ date January 7 19 with format uk should return 07 Jan 2019
    date input '7 Jan 2019' converted to all formats
      ✓ date 7 Jan 2019 with format / should return 01/07/2019
      ✓ date 7 Jan 2019 with format - should return 01-07-2019
      ✓ date 7 Jan 2019 with format . should return 01.07.2019
      ✓ date 7 Jan 2019 with format england should return 07 Jan 2019
      ✓ date 7 Jan 2019 with format uk should return 07 Jan 2019
    date input '7 January 2019' converted to all formats
      ✓ date 7 January 2019 with format / should return 01/07/2019
      ✓ date 7 January 2019 with format - should return 01-07-2019
      ✓ date 7 January 2019 with format . should return 01.07.2019
      ✓ date 7 January 2019 with format england should return 07 Jan 2019
      ✓ date 7 January 2019 with format uk should return 07 Jan 2019

  date other valid inputs
    ✓ date '1/7/19' should return '01/07/2019'
    ✓ date '1-7-19' should return '01/07/2019'
    ✓ date '1.7.19' should return '01/07/2019'
    ✓ date 'Jan 7 19' should return '01/07/2019'
    ✓ date 'January 7 19' should return '01/07/2019'
    ✓ date '7 Jan 2019' should return '01/07/2019'
    ✓ date '7 January 2019' should return '01/07/2019'
    ✓ date undefined or new Date() should return todays date 08/14/2020

  date format undefined
    ✓ format `undefined` should return `01/07/2019`
    ✓ format `null` should return `01/07/2019`
    ✓ format `foo` should return `01/07/2019`
    ✓ format `8` should return `01/07/2019`

  getTimestamp
    ✓ should get timestamp after epoch Noveber 4, 1973
    ✓ should get timestamp before epoch July 4, 1776

  _import
    ✓ should import @flavioespinoza/log_log

  isDate
    ✓ value Fri Aug 14 2020 12:16:04 GMT-0600 (Mountain Daylight Time) returns true
    ✓ value 3/3/19 returns true
    ✓ value Jul 4, 1776 returns true
    ✓ value -6106035604000 returns true
    ✓ value 25200000 returns true
    ✓ value [object Object] returns false
    ✓ value 3/33/19 returns false
    ✓ value true returns false
    ✓ value false returns false
    ✓ value 1 returns false
    ✓ value null returns false
    ✓ value undefined returns false

  subtract
    ✓ should subtract two numbers
    ✓ should coerce arguments to numbers

  subtractDays
    ✓ should subtract 1 day '3/6/19' format '-' return '03-05-2019'
    ✓ should subtract 2 day '3/6/19' format '.' return '03.04.2019'
    ✓ should subtract 3 day '3/6/19' format 'uk' return '03 Mar 2019'


  78 passing (44ms)

✨  Done in 0.36s.
```
