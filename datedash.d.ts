declare module "datedash" {
	// Date-related methods
	export function date(input: Date | string | number, format: string): string;
	export function now(): number;
	export function getTimestamp(date?: Date | string | number): number;
	export function isDate(value: any): boolean;

	// Math Hours
	export function addHours(
		date: Date | string | number,
		hours: number,
		format?: "ts" | "timestamp" | "full" | null
	): Date | number;
	export function subtractHours(
		date: Date | string | number,
		hours: number,
		format?: "ts" | "timestamp" | "full" | null
	): Date | number;

	// Math Days
	export function addDays(
		date: Date | string | number,
		days: number,
		format?: string
	): string;
	export function subtractDays(
		date: Date | string | number,
		days: number,
		format?: string
	): string;

	// Yarn test methods
	export function yarnTest(): { val: string; key: string };
	export function yarnTest2(): { val: string; key: string; date: Date };

	// Version
	export const VERSION: string;
}
