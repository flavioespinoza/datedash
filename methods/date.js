const _ = require('lodash')

function date(date, format) {
	let d

	if (!date) {
		d = new Date(_.now())
	} else {
		d = new Date(date)
	}

	const pad = (s) => {
		return s < 10 ? '0' + s : s
	}

	const months = [
		'',
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]

	const year = d.getFullYear()

	const day = [pad(d.getDate())]

	const month_name = months[d.getMonth() + 1]

	const month_number = pad(d.getMonth() + 1)

	const date_usa = [month_number, day, year]

	const date_uk = `${day} ${month_name} ${year}`

	if (format === '/' || format === '-' || format === '.') {
		return date_usa.join(format)
	} else if (format === 'MMM DD YYYY') {
		return [month_name, day, year].join(' ')
	} else if (format === 'full') {
		return d
	} else if (format === 'england' || format === 'uk') {
		return date_uk
	} else {
		return date_usa.join('/')
	}
}
module.exports = date
