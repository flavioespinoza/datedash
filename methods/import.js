	/**
	 * Import using `esm` or `TypeScript`
	 *
	 * @static
	 * @since 1.0.0
	 * @category Import
	 * @example
	 *
	 * import _d from 'datedash'
	 *
	 * _d.date('3/14/2019', 'uk')
	 * // => 14 Mar 2019
	 *
	 * _d.addDays('3/6/19', 1, '-')
	 * // => 03-07-2019
	 */
	import _d from 'datedash'

	const myDate = _d.date('3/14/2019', 'uk')
	console.log(myDate)
	// => 14 Mar 2019

	const myDateAdd = _d.addDays('3/6/19', 1, '-')
	console.log(myDateAdd)
	// => 03-07-2019

	module.exports = () => {
			console.log('import.js returns nothing.  It is required for the npm run doc script to generate the docs side nav.')
	}