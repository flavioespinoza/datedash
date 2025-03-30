import assert from 'assert'
import _ from 'lodash'
import date from '../methods/date'

let any_date = 'Jan 7, 2019'

const formatOptions = [
	{
		format: '/',
		expected: '01/07/2019'
	},
	{
		format: '-',
		expected: '01-07-2019'
	},
	{
		format: '.',
		expected: '01.07.2019'
	},
	{
		format: 'england',
		expected: '07 Jan 2019'
	},
	{
		format: 'uk',
		expected: '07 Jan 2019'
	}
]

describe('date format options', () => {
	_.each(formatOptions, (obj) => {
		it(`format '${obj.format}' should return '${obj.expected}'`, (done) => {
			assert.strictEqual(date(any_date, obj.format), obj.expected)
			done()
		})
	})

	it(`format 'full' should return 'Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)'`, (done) => {
		const _dateFull = date(any_date, 'full')
		const _dateFullString = _.toString(_dateFull)
		assert.strictEqual(
			_dateFullString,
			'Mon Jan 07 2019 00:00:00 GMT-0700 (Mountain Standard Time)'
		)
		done()
	})
})

const validDateStringInputs = [
	{
		date: '1/7/19',
		expected: '01/07/2019'
	},
	{
		date: '1-7-19',
		expected: '01/07/2019'
	},
	{
		date: '1.7.19',
		expected: '01/07/2019'
	},
	{
		date: 'Jan 7 19',
		expected: '01/07/2019'
	},
	{
		date: 'January 7 19',
		expected: '01/07/2019'
	},
	{
		date: '7 Jan 2019',
		expected: '01/07/2019'
	},
	{
		date: '7 January 2019',
		expected: '01/07/2019'
	}
]

describe('date valid string input with all format options', () => {
	_.each(validDateStringInputs, (obj) => {
		describe(`date input '${obj.date}' converted to all formats`, () => {
			_.each(formatOptions, (format) => {
				it(`date ${obj.date} with format ${format.format} should return ${format.expected}`, (done) => {
					assert.strictEqual(date(obj.date, format.format), format.expected)
					done()
				})
			})
		})
	})
})

describe('date other valid inputs', () => {
	_.each(validDateStringInputs, (obj, idx) => {
		it(`date '${obj.date}' should return '${obj.expected}'`, (done) => {
			assert.strictEqual(date(obj.date), obj.expected)
			done()
		})
	})

	it(`date undefined or new Date() should return todays date ${date()}`, (done) => {
		const now1 = date()
		const now2 = date(new Date())
		assert.strictEqual(now1, now2)
		done()
	})
})

describe('date format undefined', () => {
	it('format `undefined` should return `01/07/2019`', (done) => {
		assert.strictEqual(date(any_date), '01/07/2019')
		done()
	})

	it('format `null` should return `01/07/2019`', (done) => {
		assert.strictEqual(date(any_date, null), '01/07/2019')
		done()
	})

	it('format `foo` should return `01/07/2019`', (done) => {
		assert.strictEqual(date(any_date, 'foo'), '01/07/2019')
		done()
	})

	it('format `8` should return `01/07/2019`', (done) => {
		assert.strictEqual(date(any_date, 8), '01/07/2019')
		done()
	})
})
