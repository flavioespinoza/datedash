# datedash

A Lodash-inspired NPM module for date formatting and date math calculations.

## Installation

Using Yarn:

```bash
yarn add @flavioespinoza/datedash
```

## Importing

### ES6 Modules

```js
import _d from 'datedash'

_d.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_d.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

Import individual modules:

```js
import { getTimestamp } from 'datedash'

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

### CommonJS

Using require:

```js
const _d = require('datedash')

_d.date('Apr 4, 2017', 'uk')
// => 04 Apr 2017

_d.getTimestamp('Apr 4, 2017')
// => 1491285600000
```

Require individual modules:

```js
const { getTimestamp } = require('datedash')

getTimestamp('Apr 4, 2017')
// => 1491285600000
```

## Format Options

Available format options: `/`, `-`, `.`, `MMM DD YYYY`, `england`, `uk`, `full`

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

## Supported Date String Formats

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

## Other Supported Input Types

```js
_d.date()
// => 03/06/2019 (current date)

_d.date(new Date())
// => 03/06/2019

_d.date(1551875334611)
// => 03/06/2019

_d.date(_.toString(new Date()))
// => 03/06/2019
```

## Handling Past, Present, and Future Dates

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

## Timestamp Support

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

## Handling Invalid Format Arguments

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

1. Clone the repository:

```bash
git clone https://github.com/flavioespinoza/datedash.git
```

2. Navigate to the datedash directory:

```bash
cd <your-path>/datedash
```

3. Install dependencies:

```bash
yarn
```

4. Run tests:

```bash
yarn run test
```

Expected test output:

```bash
78 passing (44ms)

✨  Done in 0.36s.
```
