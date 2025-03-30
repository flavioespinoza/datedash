import assert from "assert";
import { each } from "lodash";
import addDays from "../methods/addDays";

const any_date = "3/6/19";

describe("addDays", () => {
	const tests = [
		{
			date: any_date,
			days: 1,
			format: "-",
			expected: "03-07-2019",
		},
		{
			date: any_date,
			days: 2,
			format: ".",
			expected: "03.08.2019",
		},
		{
			date: any_date,
			days: 3,
			format: "uk",
			expected: "09 Mar 2019",
		},
	];

	each(tests, (obj) => {
		it(`should add ${obj.days} day '${obj.date}' format '${obj.format}' return '${obj.expected}'`, (done) => {
			assert.strictEqual(
				addDays(obj.date, obj.days, obj.format),
				obj.expected
			);
			done();
		});
	});
});
