import { ISummaries, RANGE, SLICE_BY } from "./types/default";
import axios, { AxiosInstance } from "axios";

class WakaTimeApi {
	axiosConfig: AxiosInstance;
	/**
	 *
	 * @param apiKey wakatime api key
	 * @param baseUrl wakatime api base url
	 */
	constructor(private apiKey: string, baseUrl = "https://wakatime.com/api/v1/") {
		this.apiKey = apiKey;
		this.axiosConfig = axios.create({
			baseURL: baseUrl,
			headers: {
				Authorization: `Basic ${Buffer.from(this.apiKey).toString("base64")}`,
			},
		});
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @returns A single user.
	 */
	getUser(userId: string): Promise<JSON> {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}`).then((response) => response.data);
	}

	/**
	 *
	 * @returns Current users waka tiem data.
	 */
	getMe(): Promise<JSON> {
		return this.getUser("current");
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @returns Gets a users agents.
	 */
	getUserAgents(userId: string): Promise<JSON> {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/user_agents`).then((response) => response.data);
	}

	/**
	 *
	 * @returns Gets current users agents.
	 */
	getMyUserAgents(): Promise<JSON> {
		return this.getUserAgents("current");
	}

	/**
	 * @param userId users wakatime id
	 * @param start start date in ISO FORMAT
	 * @param end end date in ISO FORMAT
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param timezone optional: timezone
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Summary data for a user.
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
		range?: RANGE
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
	 *
	 * @param start start date in ISO FORMAT
	 * @param end end date in ISO FORMAT
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param timezone optional: timezone
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Summary data for current user.
	 */
	getMySummaries(
		start: Date,
		end: Date,
		project?: String,
		branches?: String,
		timeout?: Number,
		writes_only?: Boolean,
		timezone?: String,
		range?: RANGE
	) {
		return this.getUserSummaries("current", start, end, project, branches, timeout, writes_only, timezone, range);
	}

	/**
	 *
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Stats data for current user.
	 */
	getStatsAggregated(range: RANGE) {
		if (!range) {
			throw new Error("range is required");
		}
		return this.axiosConfig.get(`/stats/${range}`).then((response) => response.data);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @param timeout optional: timeout in seconds
	 * @param writes_only optional: only return write data
	 * @param project optional: project name
	 * @returns Stats data for a user.
	 */
	async getStats(userId: String, range: RANGE, timeout?: Number, writes_only?: Boolean, project?: String) {
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
	 *
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Stats data for current user.
	 */
	getMyStats(range: RANGE) {
		if (!range) {
			throw new Error("range is required");
		}
		return this.getStats("current", range);
	}
	/**
	 *
	 * @param userId users wakatime id
	 * @param query optional: Filter project names by a search term.
	 * @returns Gets a users projects.
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
	 * @param query optional: Filter project names by a search term.
	 * @returns Gets current users projects.
	 */
	getMyProjects(query?: String) {
		return this.getUserProjects("current", query);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param board optional: board name
	 * @param language optional: language name
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets a users Leaderboards.
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
	 *
	 * @param board optional: board name
	 * @param language optional: language name
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets current users Leaderboards.
	 */
	getMyPrivateLeaderboardsLeaders(board: String, language?: String, country_code?: String, page?: Number) {
		return this.getPrivateLeaderboardsLeaders("current", board, language, country_code, page);
	}
	/**
	 *
	 * @param userId users wakatime id
	 * @returns Gets a users Private Leaderboards.
	 */
	getPrivateLeaderboards(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/leaderboards/`).then((response) => response.data);
	}
	/**
	 *
	 * @returns Gets current users Private Leaderboards.
	 */
	getMyPrivateLeaderboards() {
		return this.getPrivateLeaderboards("current");
	}
	/**
	 *
	 * @param userId users wakatime id
	 * @returns Gets a users Orgs.
	 */
	getUsersOrgs(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/orgs`).then((response) => response.data);
	}

	/**
	 *
	 * @returns Gets current users Orgs.
	 */
	getMyUsersOrgs() {
		return this.getUsersOrgs("current");
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param org org name
	 * @returns Gets a users Org Dashboards.
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
	 * @param org org name
	 * @returns Gets current users Org Dashboards.
	 * */
	getMyOrgsDashboard(org: String) {
		return this.getUsersOrgDashboard("current", org);
	}

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
	 *
	 * @param org org name
	 * @param dashboard dashboard name
	 * @returns Gets current users Org Projects.
	 */
	getMyOrgDashboardMembers(org: String, dashboard: String) {
		return this.getOrgDashboardMembers("current", org, dashboard);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param org org name
	 * @param dashboard  dashboard name
	 * @param member member name
	 * @param start start date
	 * @param end end date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Gets a users Org Dashboard Summaries.
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
	 * @param org org name
	 * @param dashboard  dashboard name
	 * @param member member name
	 * @param start start date
	 * @param end end date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
	 * @returns Gets current users Org Dashboard Member Summaries.
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
	 *
	 * @param userId users wakatime id
	 * @param org org name
	 * @param dashboard dashboard name
	 * @param member member name
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @returns Gets a users Org Dashboard Member Durations.
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
	 * @param org org name
	 * @param dashboard  dashboard name
	 * @param member member name
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @returns Gets current users Org Projects.
	 * */
	getMyOrgDashboardMemberDurations(org: String, dashboard: String, member: String, date: Date, project?: String, branches?: String) {
		return this.orgDashboardMemberDurations("current", org, dashboard, member, date, project, branches);
	}
	/**
	 *
	 * @returns Gets infomation about WakaTime.
	 */
	getMeta() {
		return this.axiosConfig.get("meta").then((response) => response.data);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @returns Gets a users Machine names.
	 */
	getUserMachineNames(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/machine_names`).then((response) => response.data);
	}
	/**
	 *
	 * @returns Gets current users Machine names.
	 */
	getMyUserMachineNames() {
		return this.getUserMachineNames("current");
	}

	/**
	 *
	 * @param language language name
	 * @param is_hireable optional: true or false
	 * @param country_code optional: country code
	 * @param page optional: page number
	 * @returns Gets a list of Leaders.
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
	 *
	 * @param userId users wakatime id
	 * @param date date
	 * @returns get a users Heartbeats.
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
	 *
	 * @param date date
	 * @returns get current users Heartbeats.
	 */
	getMyUserHeartbeats(date: Date) {
		return this.getUserHeartbeats("current", date);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @returns get a users Heartbeats.
	 */
	getUserGoals(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/goals`).then((response) => response.data);
	}

	/**
	 *
	 * @returns get current users Heartbeats.
	 */
	getMyUserGoals() {
		return this.getUserGoals("current");
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timezone optional: timezone
	 * @returns gets a users external durations on a given day
	 */
	getExternalDurations(userId: String, date: Date, project?: String, branches?: String, timezone?: String) {
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
	 *
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timezone optional: timezone
	 * @returns gets a users external durations on a given day
	 */
	getMyExternalDurations(date: Date, project?: String, branches?: String, timezone?: String) {
		return this.getExternalDurations("current", date, project, branches, timezone);
	}

	/**
	 *
	 * @param unreleased Show unrealesed editor plugins
	 * @returns List of WakaTime IDE plugins versions
	 */
	getEditors(unreleased?: Boolean) {
		let params: Object = {
			unreleased: unreleased,
		};
		return this.axiosConfig.get("editors", params).then((response) => response.data);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param date date
	 * @param project optional: project name
	 * @param branches optional: branch name
	 * @param timeout optional: timeout
	 * @param writes_only optional: true or false
	 * @param timezone optional: timezone
	 * @param slice_by optional: DEFAULT Entity enum: entity, language, dependencies, os, editor, category or machine
	 * @returns Gets a users durations.
	 */
	getDurations(
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
			slice_by: SLICE_BY,
		};
		return this.axiosConfig.get(`users/${userId}/durations`, params).then((response) => response.data);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @returns List of data exports for the user
	 */
	getUserDataDump(userId: String) {
		if (!userId) {
			throw new Error("userId is required");
		}
		return this.axiosConfig.get(`users/${userId}/data_dump`).then((response) => response.data);
	}

	/**
	 *
	 * @returns List of data exports for the user
	 */
	getMyUserDataDump() {
		return this.getUserDataDump("current");
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param project optional: project name
	 * @param author optional: author name
	 * @param branch optional: branch name
	 * @param page optional: page number
	 * @returns List of commits for the user
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
	 *
	 * @param project optional: project name
	 * @param author optional: author name
	 * @param branch optional: branch name
	 * @param page optional: page number
	 * @returns List of commits for the current user
	 */
	getMyUserCommits(project: String, author?: String, branch?: String, page?: Number) {
		return this.getUserCommits("current", project, author, branch, page);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param project optional: project name
	 * @param hash optional: commit hash
	 * @param branch optional: branch name
	 * @returns List a user commits for a given commit hash
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
	 *
	 * @param project optional: project name
	 * @param hash optional: commit hash
	 * @param branch optional: branch name
	 * @returns List the current user commits for a given commit hash
	 */
	getMyUserCommit(project: String, hash: String, branch?: String) {
		return this.getUserCommit("current", project, hash, branch);
	}

	/**
	 *
	 * @param userId users wakatime id
	 * @param project optional: project name
	 * @returns The total time logged since account created. Even for free accounts
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

export { WakaTimeApi, RANGE, SLICE_BY };
