function getTimestamp(value) {
	if (!value) {
		return Date.now()
	}
	return new Date(value).getTime()
}

module.exports = getTimestamp
