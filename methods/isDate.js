const _ = require('lodash')

function isDate(value) {
	if (!value || !_.isDate(new Date(value))) {
		return false
	}
	if (value && typeof value === 'boolean') {
		return false
	}
	if (typeof value === 'number') {
		const _timestamp = new Date(value).getTime()
		const _epochTimestamp = 25200000
		if (_timestamp < _epochTimestamp && _timestamp > 0) {
			return false
		}
	}
	return _.toString(new Date(value)) !== 'Invalid Date'
}

module.exports = isDate
