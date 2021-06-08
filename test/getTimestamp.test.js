import assert from "assert";
import getTimestamp from "../methods/getTimestamp";

describe("getTimestamp", function () {
	it("should get timestamp after epoch November 4, 1973", function () {
		assert.strictEqual(getTimestamp("November 4, 1973"), 121244400000);
	});

	it("should get timestamp before epoch July 4, 1776", function () {
		assert.strictEqual(getTimestamp("July 4, 1776"), -6106035604000);
	});
});
