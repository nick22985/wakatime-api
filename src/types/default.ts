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

export enum SLICE_BY {
	ENTITY = "entity",
	LANGUAGE = "language",
	DEPENDENCIES = "dependencies",
	OS = "os",
	EDITOR = "editor",
	CATEGORY = "category",
	MACHINE = "machine",
}
