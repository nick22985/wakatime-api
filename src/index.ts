import { ISummaries, RANGE, SLICE_BY, SUMMARY_RANGE } from "./types/default";
import axios, { AxiosInstance } from "axios";

class WakaTimeApi {
	axiosConfig: AxiosInstance;
	/**
	 * @desc Creates a api client.
	 * @param apiKey wakatime api key
	 * @param baseUrl wakatime api base url
	 * @example
	 * const wakaTimeApi = new WakaTimeApi("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 * const wakaTimeApi = new WakaTimeApi(apiKey, "https://wakatime.com/api/v1/");
	 */
	constructor(private apiKey: string, baseUrl = "https://wakatime.com/api/v1/") {
		this.axiosConfig = axios.create({
			baseURL: baseUrl,
			headers: {
				Authorization: `Basic ${Buffer.from(this.apiKey).toString("base64")}`,
			},
		});
	}
	/**
	 * @desc Gets a users stats.
	 * @scope email
	 * @param userId users wakatime id
	 * @returns A single user.
	 * @example getUser("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUser(userId: string): Promise<JSON> {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}`).then((response) => response.data);
	}
	/**
	 * @desc Gets your stats
	 * @returns Current users waka tiem data.
	 * @example await getMe();
	 */
	getMe(): Promise<JSON> {
		return this.getUser("current");
	}
	/**
	 * @desc List of plugins which have sent data for a user.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @returns Gets a users agents.
	 * @example await getUserAgents("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserAgents(userId: string): Promise<JSON> {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/user_agents`).then((response) => response.data);
	}
	/**
	 * @desc List of plugins which have sent data for this user.
	 * @returns Gets current users agents.
	 * @example await getMyUserAgents();
	 */
	getMyAgents(): Promise<JSON> {
		return this.getUserAgents("current");
	}
	/**
	 * @desc A user's coding activity for the given time range as an array of summaries segmented by day.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param start start date in ISO FORMAT
	 * @param end end date in ISO FORMAT
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param timezone optional: timezone
	 * @param range optional: RANGE enum value
	 * @returns Summary data for a user.
	 * @example await getUserSummaries("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", new Date("2019-01-01"), new Date("2020-01-31"));
	 */
	getUserSummaries(
		userId: String,
		start: Date,
		end: Date,
		project?: String,
		branches?: String,
		timeout?: Number,
		writes_only?: Boolean,
		timezone?: String,
		range?: SUMMARY_RANGE
	): Promise<JSON> {
		let params: ISummaries = {
			start: start,
			end: end,
			project: project,
			branches: branches,
			timeout: timeout,
			writes_only: writes_only,
			timezone: timezone,
			range: range,
		};
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!start) {
			throw new Error("start is required");
		}
		if (!end) {
			throw new Error("end is required");
		}
		return this.axiosConfig.get(`users/${userId}/summaries`, { params }).then((response) => response.data);
	}
	/**
	 * @desc A your coding activity for the given time range as an array of summaries segmented by day.
	 * @param start start date in ISO FORMAT
	 * @param end end date in ISO FORMAT
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param timezone optional: timezone
	 * @param range optional: RANGE enum value
	 * @returns Summary data for current user.
	 * @example await getUserSummaries(new Date("2019-01-01"), new Date("2020-01-31"));
	 */
	getMySummaries(
		start: Date,
		end: Date,
		project?: String,
		branches?: String,
		timeout?: Number,
		writes_only?: Boolean,
		timezone?: String,
		range?: SUMMARY_RANGE
	) {
		return this.getUserSummaries("current", start, end, project, branches, timeout, writes_only, timezone, range);
	}
	/**
	 * @desc Aggregate stats of all WakaTime users over the given time range.
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Stats data for current user.
	 * @example await getStatsAggregated(RANGE.LAST_7_DAYS);
	 */
	getStatsAggregated(range: RANGE) {
		if (!range) {
			throw new Error("range is required");
		}
		return this.axiosConfig.get(`/stats/${range}`).then((response) => response.data);
	}
	/**
	 * @desc A user's coding activity for the given time range.
	 * @scope read_stats
	 * @param userId users wakatime id
	 * @param range RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param project optional: project name
	 * @returns Stats data for a user.
	 * @example await getStats("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", RANGE.LAST_7_DAYS);
	 */
	getStats(userId: String, range: RANGE, timeout?: Number, writes_only?: Boolean, project?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!range) {
			throw new Error("range is required");
		}
		let args: Object = {
			timeout: timeout,
			writes_only: writes_only,
			project: project,
		};
		return this.axiosConfig.get(`users/${userId}/stats/${range}`, args).then((response) => response.data);
	}
	/**
	 * @desc A your coding activity for the given time range.
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Stats data for current user.
	 * @example await getMyStats(RANGE.LAST_7_DAYS);
	 */
	getMyStats(range: RANGE) {
		if (!range) {
			throw new Error("range is required");
		}
		return this.getStats("current", range);
	}
	/**
	 * @desc List of WakaTime projects for a user.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param query optional: Filter project names by a search term.
	 * @returns Gets a users projects.
	 * @example await getUserProjects("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserProjects(userId: String, query?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		let parmas: Object = {
			query: query,
		};
		return this.axiosConfig.get(`users/${userId}/projects`, parmas).then((response) => response.data);
	}
	/**
	 * @desc List of WakaTime projects for the current user.
	 * @param query optional: Filter project names by a search term.
	 * @returns Gets current users projects.
	 * @example await getMyProjects();
	 */
	getMyProjects(query?: String) {
		return this.getUserProjects("current", query);
	}
	/**
	 * @desc List of users in this private leaderboard ranked by coding activity in descending order.
	 * @scope read_private_leaderboards
	 * @param userId users wakatime id
	 * @param board board name
	 * @param language optional: language name
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets a users Leaderboards.
	 * @example await getUserLeaderboard("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime");
	 */
	getPrivateLeaderboardsLeaders(userId: String, board: String, language?: String, country_code?: String, page?: Number) {
		let params: Object = {
			language: language,
			country_code: country_code,
			page: page,
		};
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!board) {
			throw new Error("board is required");
		}
		return this.axiosConfig.get(`users/${userId}/leaderboards/${board}`, params).then((response) => response.data);
	}
	/**
	 * @desc List of users in your private leaderboard ranked by coding activity in descending order.
	 * @param board board name
	 * @param language optional: language name
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets current users Leaderboards.
	 * @example await getMyPrivateLeaderboardsLeaders("wakatime");
	 */
	getMyPrivateLeaderboardsLeaders(board: String, language?: String, country_code?: String, page?: Number) {
		return this.getPrivateLeaderboardsLeaders("current", board, language, country_code, page);
	}
	/**
	 * @desc List user’s private leaderboards.
	 * @scope read_private_leaderboards
	 * @param userId users wakatime id
	 * @returns Gets a users Private Leaderboards.
	 * @example await getPrivateLeaderboards("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getPrivateLeaderboards(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/leaderboards/`).then((response) => response.data);
	}
	/**
	 * @desc List your private leaderboards.
	 * @returns Gets current users Private Leaderboards.
	 * @example await getMyPrivateLeaderboards();
	 */
	getMyPrivateLeaderboards() {
		return this.getPrivateLeaderboards("current");
	}
	/**
	 * @desc List a user’s organizations.
	 * @scope read_orgs
	 * @param userId users wakatime id
	 * @returns Gets a users Orgs.
	 * @example await getUserOrgs("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUsersOrgs(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/orgs`).then((response) => response.data);
	}
	/**
	 * @desc List a user’s organizations.
	 * @returns Gets current users Orgs.
	 * @example await getMyOrgs();
	 */
	getMyOrgs() {
		return this.getUsersOrgs("current");
	}
	/**
	 * @desc List a user’s organizations.
	 * @scope read_orgs
	 * @param userId users wakatime id
	 * @param org org UUID
	 * @returns Gets a users Org Dashboards.
	 * @example await getUsersOrgDashboard("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime");
	 */
	getUsersOrgDashboard(userId: String, org: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!org) {
			throw new Error("org is required");
		}
		return this.axiosConfig.get(`users/${userId}/orgs/${org}/dashboards`).then((response) => response.data);
	}
	/**
	 * @desc List the organization’s dashboards.
	 * @param org org UUID
	 * @returns Gets current users Org Dashboards.
	 * @example await getMyOrgsDashboard("wakatime");
	 * */
	getMyOrgsDashboard(org: String) {
		return this.getUsersOrgDashboard("current", org);
	}
	/**
	 * @desc List an organization’s members.
	 * @scope read_orgs
	 * @param userId users wakatime id
	 * @param org org UUID
	 * @param dashboard dashboard name
	 * @returns Gets a users Org Dashboard.
	 */
	getOrgDashboardMembers(userId: String, org: String, dashboard: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!org) {
			throw new Error("org is required");
		}
		if (!dashboard) {
			throw new Error("dashboard is required");
		}
		return this.axiosConfig.get(`users/${userId}/orgs/${org}/dashboards/${dashboard}/members`).then((response) => response.data);
	}
	/**
	 * @desc List your organization’s members.
	 * @param org org UUID
	 * @param dashboard dashboard UUID
	 * @returns Gets current users Org Projects.
	 * @example await getMyOrgDashboardMembers("wakatime", "wakatime");
	 */
	getMyOrgDashboardMembers(org: String, dashboard: String) {
		return this.getOrgDashboardMembers("current", org, dashboard);
	}
	/**
	 * @desc An organization dashboard member’s coding activity for the given time range as an array of summaries segmented by day.
	 * @scope read_orgs
	 * @param userId users wakatime id
	 * @param org org UUID
	 * @param dashboard  dashboard UUID
	 * @param member member name
	 * @param start start date
	 * @param end end date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Gets a users Org Dashboard Summaries.
	 * @example await orgDashboardMemberSummaries("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime", "wakatime", "nick22985", "2019-01-01", "2020-01-31");
	 */
	orgDashboardMemberSummaries(
		userId: String,
		org: String,
		dashboard: String,
		member: String,
		start: Date,
		end: Date,
		project?: String,
		branches?: String,
		range?: RANGE
	) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!org) {
			throw new Error("org is required");
		}
		if (!dashboard) {
			throw new Error("dashboard is required");
		}
		if (!member) {
			throw new Error("member is required");
		}
		if (!start) {
			throw new Error("start is required");
		}
		if (!end) {
			throw new Error("end is required");
		}
		let params: Object = {
			start: start,
			end: end,
			project: project,
			branches: branches,
			range: range,
		};
		return this.axiosConfig
			.get(`users/${userId}/orgs/${org}/dashboards/${dashboard}/members/${member}/summaries`, params)
			.then((response) => response.data);
	}
	/**
	 * @desc An organization dashboard member’s coding activity for the given time range as an array of summaries segmented by day.
	 * @param org org UUID
	 * @param dashboard dashboard UUID
	 * @param member member name
	 * @param start start date
	 * @param end end date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Gets current users Org Dashboard Member Summaries.
	 * @example await getMyOrgDashboardMemberSummaries("wakatime", "wakatime", "nick22985", "2019-01-01", "2020-01-31");
	 * */
	getMyOrgDashboardMemberSummaries(
		org: String,
		dashboard: String,
		member: String,
		start: Date,
		end: Date,
		project?: String,
		branches?: String,
		range?: RANGE
	) {
		return this.orgDashboardMemberSummaries("current", org, dashboard, member, start, end, project, branches, range);
	}
	/**
	 * @desc A dashboard member's coding activity for the given day as an array of durations.
	 * @scope read_orgs
	 * @param userId users wakatime id
	 * @param org org UUID
	 * @param dashboard dashboard UUID
	 * @param member member name
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @returns Gets a users Org Dashboard Member Durations.
	 * @example await orgDashboardMemberDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime", "wakatime", "nick22985", "2019-01-01");
	 */
	orgDashboardMemberDurations(userId: String, org: String, dashboard: String, member: String, date: Date, project?: String, branches?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!org) {
			throw new Error("org is required");
		}
		if (!dashboard) {
			throw new Error("dashboard is required");
		}
		if (!member) {
			throw new Error("member is required");
		}
		if (!date) {
			throw new Error("date is required");
		}
		let params: Object = {
			date: date,
			project: project,
			branches: branches,
		};
		return this.axiosConfig
			.get(`users/${userId}/orgs/${org}/dashboards/${dashboard}/members/${member}/durations`, params)
			.then((response) => response.data);
	}
	/**
	 * @desc A dashboard member's coding activity for the given day as an array of durations.
	 * @param org org UUID
	 * @param dashboard  dashboard UUID
	 * @param member member name
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @returns Gets current users Org Projects.
	 * @example await getMyOrgDashboardMemberDurations("wakatime", "wakatime", "nick22985", "2019-01-01");
	 * */
	getMyOrgDashboardMemberDurations(org: String, dashboard: String, member: String, date: Date, project?: String, branches?: String) {
		return this.orgDashboardMemberDurations("current", org, dashboard, member, date, project, branches);
	}
	/**
	 * @desc A dashboard member's coding activity for the given day as an array of durations.
	 * @returns Gets infomation about WakaTime.
	 * @example await getWakaTimeInfo();
	 */
	getMeta() {
		return this.axiosConfig.get("meta").then((response) => response.data);
	}
	/**
	 * @desc List of machines for this user.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @returns Gets a users Machine names.
	 * @example await getMachines("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserMachineNames(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/machine_names`).then((response) => response.data);
	}
	/**
	 * @desc List of machines for this user.
	 * @returns Gets current users Machine names.
	 * @example await getMyMachineNames();
	 */
	getMyMachineNames() {
		return this.getUserMachineNames("current");
	}
	/**
	 * @desc List of users ranked by coding activity in descending order.
	 * @param language language name
	 * @param is_hireable optional: true or false
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets a list of Leaders.
	 * @example await getLeaders("python");
	 */
	getLeaders(language: String, is_hireable?: Boolean, country_code?: String, page?: number) {
		let params: Object = {
			language: language,
			is_hireable: is_hireable,
			country_code: country_code,
			page: page,
		};
		return this.axiosConfig.get("leaders", params).then((response) => response.data);
	}
	/**
	 * @desc A user's heartbeats sent from plugins for the given day as an array.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param date date
	 * @returns get a users Heartbeats.
	 * @example await getUserHeartbeats("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");
	 */
	getUserHeartbeats(userId: String, date: Date) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!date) {
			throw new Error("date is required");
		}
		let params: Object = {
			date: date,
		};
		return this.axiosConfig.get(`users/${userId}/heartbeats`, params).then((response) => response.data);
	}
	/**
	 * @desc A user's heartbeats sent from plugins for the given day as an array.
	 * @param date date
	 * @returns get current users Heartbeats.
	 * @example await getMyHeartbeats("2019-01-01");
	 */
	getMyHeartbeats(date: Date) {
		return this.getUserHeartbeats("current", date);
	}
	/**
	 * @desc List a user’s goals.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @returns get a users Heartbeats.
	 * @example await getUserGoals("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserGoals(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/goals`).then((response) => response.data);
	}
	/**
	 * @desc List a user’s goals.
	 * @returns get current users Heartbeats.
	 * @example await getMyGoals();
	 */
	getMyGoals() {
		return this.getUserGoals("current");
	}
	/**
	 * @desc A user's external durations for the given day.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timezone optional: timezone
	 * @returns gets a users external durations on a given day
	 * @example await getUserExternalDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");
	 */
	getUserExternalDurations(userId: String, date: Date, project?: String, branches?: String, timezone?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!date) {
			throw new Error("date is required");
		}
		let params: Object = {
			date: date,
			project: project,
			branches: branches,
			timezone: timezone,
		};
		return this.axiosConfig.get(`users/${userId}/external_durations`, params).then((response) => response.data);
	}
	/**
	 * @desc A user's external durations for the given day.
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timezone optional: timezone
	 * @returns gets a users external durations on a given day
	 */
	getMyExternalDurations(date: Date, project?: String, branches?: String, timezone?: String) {
		return this.getUserExternalDurations("current", date, project, branches, timezone);
	}
	/**
	 * @desc List of WakaTime IDE plugins, latest plugin versions, and their color used on WakaTime charts.
	 * @param unreleased Show unrealesed editor plugins
	 * @returns List of WakaTime IDE plugins versions
	 * @example await getEditors();
	 */
	getEditors(unreleased?: Boolean) {
		let params: Object = {
			unreleased: unreleased,
		};
		return this.axiosConfig.get("editors", params).then((response) => response.data);
	}

	/**
	 * @desc A user's coding activity for the given day as an array of durations
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout
	 * @param writes_only optional: true or false
	 * @param timezone optional: timezone
	 * @param slice_by optional: DEFAULT Entity enum: entity, language, dependencies, os, editor, category or machine
	 * @returns Gets a users durations.
	 * @example await getUserDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");
	 */
	getUserDurations(
		userId: String,
		date: Date,
		project?: String,
		branches?: String,
		timeout?: Number,
		writes_only?: Boolean,
		timezone?: String,
		slice_by?: SLICE_BY
	) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!date) {
			throw new Error("date is required");
		}
		let params: Object = {
			date: date,
			project: project,
			branches: branches,
			timeout: timeout,
			writes_only: writes_only,
			timezone: timezone,
			slice_by: slice_by,
		};
		return this.axiosConfig.get(`users/${userId}/durations`, params).then((response) => response.data);
	}
	/**
	 * @desc List data exports for the user.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @returns List of data exports for the user
	 * @example await getUserDataDump("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserDataDump(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/data_dump`).then((response) => response.data);
	}
	/**
	 * @desc List data exports for the user.
	 * @returns List of data exports for the user
	 * @example await getMyDataDump();
	 */
	getMyDataDump() {
		return this.getUserDataDump("current");
	}
	/**
	 * @desc List of commits for a WakaTime project showing the time spent coding in each commit.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param project project name
	 * @param author optional: author name
	 * @param branch optional: branch name
	 * @param page optional: page number
	 * @returns List of commits for the user
	 * @example await getUserCommits("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getUserCommits(userId: String, project: String, author?: String, branch?: String, page?: Number) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!project) {
			throw new Error("project is required");
		}
		let params: Object = {
			author: author,
			branch: branch,
			page: page,
		};
		return this.axiosConfig.get(`users/${userId}/projects/${project}/commits`, params).then((response) => response.data);
	}
	/**
	 * @desc List of commits for a WakaTime project showing the time spent coding in each commit.
	 * @param project optional: project name
	 * @param author optional: author name
	 * @param branch optional: branch name
	 * @param page optional: page number
	 * @returns List of commits for the current user
	 * @example await getMyCommits();
	 */
	getMyCommits(project: String, author?: String, branch?: String, page?: Number) {
		return this.getUserCommits("current", project, author, branch, page);
	}
	/**
	 * @desc A single commit from a WakaTime project showing the time spent coding on the commit.
	 * @scope read_logged_time
	 * @param userId users wakatime id
	 * @param project project name
	 * @param hash commit hash
	 * @param branch optional: branch name
	 * @returns List a user commits for a given commit hash
	 * @example await getUserCommit("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "my-project", "1234567890");
	 */
	getUserCommit(userId: String, project: String, hash: String, branch?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		if (!project) {
			throw new Error("project is required");
		}
		if (!hash) {
			throw new Error("hash is required");
		}
		let params: Object = {
			branch: branch,
		};
		return this.axiosConfig.get(`users/${userId}/projects/${project}/commits/${hash}`, params).then((response) => response.data);
	}
	/**
	 * @desc A single commit from a WakaTime project showing the time spent coding on the commit.
	 * @param project optional: project name
	 * @param hash optional: commit hash
	 * @param branch optional: branch name
	 * @returns List the current user commits for a given commit hash
	 * @example await getMyCommit("my-project", "1234567890");
	 */
	getMyCommit(project: String, hash: String, branch?: String) {
		return this.getUserCommit("current", project, hash, branch);
	}
	/**
	 * @desc The total time logged since account created, available even for Free accounts.
	 * @scope read_stats
	 * @param userId users wakatime id
	 * @param project optional: project name
	 * @returns The total time logged since account created. Even for free accounts
	 * @example await getAllTimeSinceToday("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
	 */
	getAllTimeSinceToday(userId: String, project?: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		let params: Object = {
			project: project,
		};
		return this.axiosConfig.get(`users/${userId}/all_time_since_today`, params).then((response) => response.data);
	}
}

export { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE };
