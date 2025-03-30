const { multiply, add } = require('lodash')
const { msPerHour } = require('./utils')
const date = require('./date')

function addHours(_date, nHours, format) {
	const timestamp = new Date(_date).getTime()
	const msHours = multiply(nHours, msPerHour)
	const msTotal = add(timestamp, msHours)
	if (format === 'ts' || format === 'timestamp') {
		return msTotal
	} else {
		return date(msTotal, 'full')
	}
}

module.exports = addHours
