const { multiply, add } = require("lodash");
const { msPerDay } = require("./utils");
const date = require("./date");

function addDays(_date, nDays, format) {
	const timestamp = new Date(_date).getTime();
	const msDays = multiply(nDays, msPerDay);
	const msTotal = add(timestamp, msDays);
	return date(msTotal, format);
}

module.exports = addDays;
