import assert from 'assert'
import { each } from 'lodash'
import subtractDays from '../methods/subtractDays'

const any_date = '3/6/19'

describe('subtractDays', () => {
	const tests = [
		{
			date: any_date,
			days: 1,
			format: '-',
			expected: '03-05-2019'
		},
		{
			date: any_date,
			days: 2,
			format: '.',
			expected: '03.04.2019'
		},
		{
			date: any_date,
			days: 3,
			format: 'uk',
			expected: '03 Mar 2019'
		}
	]

	each(tests, (obj) => {
		it(`should subtract ${obj.days} day '${obj.date}' format '${obj.format}' return '${obj.expected}'`, (done) => {
			assert.strictEqual(subtractDays(obj.date, obj.days, obj.format), obj.expected)
			done()
		})
	})
})
