const { multiply, subtract } = require('lodash')
const { msPerDay } = require('./utils')
const date = require('./date')

function subtractDays(_date, nDays, format) {
	const timestamp = new Date(_date).getTime()
	const msDays = multiply(nDays, msPerDay)
	const msTotal = subtract(timestamp, msDays)
	return date(msTotal, format)
}

module.exports = subtractDays
