import assert from "assert";
import _ from "lodash";
import isDate from "../methods/isDate";

const independence = new Date("Jul 4 1776").getTime();

const isDateTests = [
	{
		value: new Date(),
		expected: true,
	},
	{
		value: "3/3/19",
		expected: true,
	},
	{
		value: "Jul 4, 1776",
		expected: true,
	},
	{
		value: independence,
		expected: true,
	},
	{
		value: 25200000,
		expected: true,
	},
	{
		value: { key: "1", val: "1/2/2011" },
		expected: false,
	},
	{
		value: "3/33/19",
		expected: false,
	},
	{
		value: true,
		expected: false,
	},
	{
		value: false,
		expected: false,
	},
	{
		value: 1,
		expected: false,
	},
	{
		value: null,
		expected: false,
	},
	{
		value: undefined,
		expected: false,
	},
];

describe("isDate", () => {
	_.each(isDateTests, (obj) => {
		it(`value ${obj.value} returns ${obj.expected}`, (done) => {
			assert.strictEqual(isDate(obj.value), obj.expected);
			done();
		});
	});
});
