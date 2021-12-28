export interface ISummaries {
	start: Date;
	end: Date;
	project?: String;
	branches?: String;
	timeout?: Number;
	writes_only?: Boolean;
	timezone?: String;
	range?: String;
}

export enum RANGE {
	LAST_7_DAYS = "last_7_days",
	LAST_30_DAYS = "last_30_days",
	LAST_6_MONTHS = "last_6_months",
	LAST_YEAR = "last_year",
}

export enum SUMMARY_RANGE {
	TODAY = "Today",
	YESTERDAY = "Yesterday",
	LAST_7_DAYS = "Last 7 Days",
	LAST_7_DAYS_FROM_YESTERDAY = "Last 7 Days from Yesterday",
	LAST_14_DAYS = "Last 14 Days",
	LAST_30_DAYS = "Last 30 Days",
	THIS_WEEK = "This Week",
	LAST_WEEK = "Last Week",
	THIS_MONTH = "This Month",
	LAST_MONTH = "Last Month",
}

export enum SLICE_BY {
	ENTITY = "entity",
	LANGUAGE = "language",
	DEPENDENCIES = "dependencies",
	OS = "os",
	EDITOR = "editor",
	CATEGORY = "category",
	MACHINE = "machine",
}
