<h3 align="center">@nick22985/wakatime-api

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/nick22985/wakatime-api.svg)](https://github.com/kylelobo/wakatime-api/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/nick22985/wakatime-api.svg)](https://github.com/kylelobo/wakatime-api/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A TypeScript NodeJs client for the <a href="https://wakatime.com/developers#introduction">wakatime API</a>
<br>
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About <a name = "about"></a>](#-about-)
- [🏁 Getting Started <a name = "getting_started"></a>](#-getting-started-)
	- [Prerequisites](#prerequisites)
	- [Installing](#installing)
- [🎈 Usage <a name="usage"></a>](#-usage-)
	- [API](#api)
		- [Create a api instance](#create-a-api-instance)
		- [Custom Base URL](#custom-base-url)
		- [<strong>getUser</strong>](#getuser)
		- [<strong>getMe</strong>](#getme)
		- [<strong>getUserAgents</strong>](#getuseragents)
		- [<strong>getMyAgents</strong>](#getmyagents)
		- [<strong>getUserSummaries</strong>](#getusersummaries)
		- [<strong>getMySummaries</strong>](#getmysummaries)
		- [<strong>getStatsAggregated</strong>](#getstatsaggregated)
		- [<strong>getStats</strong>](#getstats)
		- [<strong>getMyStats</strong>](#getmystats)
		- [<strong>getUserProjects</strong>](#getuserprojects)
		- [<strong>getMyProjects</strong>](#getmyprojects)
		- [<strong>getPrivateLeaderboardsLeaders</strong>](#getprivateleaderboardsleaders)
		- [<strong>getMyPrivateLeaderboardsLeaders</strong>](#getmyprivateleaderboardsleaders)
		- [<strong>getPrivateLeaderboards</strong>](#getprivateleaderboards)
		- [<strong>getMyPrivateLeaderboards</strong>](#getmyprivateleaderboards)
		- [<strong>getUsersOrgs</strong>](#getusersorgs)
		- [<strong>getMyOrgs</strong>](#getmyorgs)
		- [<strong>getUsersOrgDashboard</strong>](#getusersorgdashboard)
		- [<strong>getMyOrgsDashboard</strong>](#getmyorgsdashboard)
		- [<strong>getOrgDashboardMembers</strong>](#getorgdashboardmembers)
		- [<strong>getMyOrgDashboardMembers</strong>](#getmyorgdashboardmembers)
		- [<strong>orgDashboardMemberSummaries</strong>](#orgdashboardmembersummaries)
		- [<strong>orgDashboardMemberDurations</strong>](#orgdashboardmemberdurations)
		- [<strong>getMyOrgDashboardMemberDurations</strong>](#getmyorgdashboardmemberdurations)
		- [<strong>getMeta</strong>](#getmeta)
		- [<strong>getUserMachineNames</strong>](#getusermachinenames)
		- [<strong>getMyMachineNames</strong>](#getmymachinenames)
		- [<strong>getLeaders</strong>](#getleaders)
		- [<strong>getUserHeartbeats</strong>](#getuserheartbeats)
		- [<strong>getMyHeartbeats</strong>](#getmyheartbeats)
		- [<strong>getUserGoals</strong>](#getusergoals)
		- [<strong>getMyGoals</strong>](#getmygoals)
		- [<strong>getUserExternalDurations</strong>](#getuserexternaldurations)
		- [<strong>getMyExternalDurations</strong>](#getmyexternaldurations)
		- [<strong>getEditors</strong>](#geteditors)
		- [<strong>getUserDurations</strong>](#getuserdurations)
		- [<strong>getMyDurations<string>](#stronggetmydurationsstring)
		- [<strong>getUserDataDump</strong>](#getuserdatadump)
		- [<strong>getMyDataDump</strong>](#getmydatadump)
		- [<strong>getUserCommits</strong>](#getusercommits)
		- [<strong>getMyCommits</strong>](#getmycommits)
		- [<strong>getUserCommit</strong>](#getusercommit)
		- [<strong>getMyCommit</strong>](#getmycommit)
		- [<strong>getUserAllTimeSinceToday</strong>](#getuseralltimesincetoday)
		- [<strong>getMyAllTimeSinceToday</strong>](#getmyalltimesincetoday)
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)
  -
- [⛏️ Built Using <a name = "built_using"></a>](#️-built-using-)
- [✍️ Authors <a name = "authors"></a>](#️-authors-)

## 🧐 About <a name = "about"></a>

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

What things you need to install the software and how to install them.

```
NodeJs
```

### Installing

```
npm i @nick22985/wakatime-api
```

## 🎈 Usage <a name="usage"></a>

### API

#### Create a api instance

```js
import { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE } from "@nick22985/wakatime-api";

const client = new wakatime.WakatimeApi("Api-key");
```

or

```js
const wakatime = require("@nick22985/wakatime-api");

const client = new wakatime.WakatimeApi("Api-key");
```

#### Custom Base URL

```js
import { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE } from "@nick22985/wakatime-api";

const client = new WakatimeApi("Api-key", "Custom-base-URL");
```

#### <strong>getUser</strong>

- @desc Gets a users stats. <br>
- @scope email <br>
- @param userId users wakatime id <br>
- @returns A single user. <br>
- @example getUser("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUser = await client.getUser("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
```

#### <strong>getMe</strong>

- @desc Gets your stats <br>
- @returns Current users waka time data. <br>
- @example await getMe();

```js
let getMe = await wakaClient.getMe();
```

#### <strong>getUserAgents</strong>

- @desc List of plugins which have sent data for a user. <br>
- @scope read_logged_time <br>
- @param userId users wakatime id<br>
- @returns Gets a users agents.<br>
- @example await getUserAgents("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserAgents = await wakaClient.getUserAgents("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
```

#### <strong>getMyAgents</strong>

- @desc List of plugins which have sent data for this user.<br>
- @returns Gets current users agents.<br>
- @example await getMyAgents();<br>

```js
let getMyAgents = await wakaClient.getMyAgents();
```

#### <strong>getUserSummaries</strong>

- @desc A user's coding activity for the given time range as an array of summaries segmented by day.<br>
- @scope read_logged_time<br>
- @param userId users wakatime id<br>
- @param start start date in ISO FORMAT<br>
- @param end end date in ISO FORMAT<br>
- @param project optional: project name<br>
- @param branches optional: branch name<br>
- @param timeout optional: timeout in seconds<br>
- @param writes_only optional: only return write data<br>
- @param timezone optional: timezone<br>
- @param range optional: RANGE enum value<br>
- @returns Summary data for a user.<br>
- @example await getUserSummaries("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01", "2020-01-31");

```js
let getUserSummaries = await wakaClient.getUserSummaries(myWakaId, "2019-01-01", "2020-01-31");
```

#### <strong>getMySummaries</strong>

- @desc A your coding activity for the given time range as an array of summaries segmented by day. <br>
- @param start start date in ISO FORMAT<br>
- @param end end date in ISO FORMAT<br>
- @param project optional: project name<br>
- @param branches optional: branch name<br>
- @param timeout optional: timeout in seconds<br>
- @param writes_only optional: only return write data<br>
- @param timezone optional: timezone<br>
- @param range optional: RANGE enum value<br>
- @returns Summary data for current user.<br>
- @example await getUserSummaries("2019-01-01", "2020-01-31");

```js
let getMySummaries = await wakaClient.getMySummaries("2019-01-01", "2020-01-31");
```

#### <strong>getStatsAggregated</strong>

- @desc Aggregate stats of all WakaTime users over the given time range.<br>
- @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)<br>
- @returns Stats data for current user.<br>
- @example await getStatsAggregated(SUMMARY_RANGE.LAST_7_DAYS);

```js
let getStatsAggregated = await wakaClient.getStatsAggregated(SUMMARY_RANGE.LAST_7_DAYS);
```

#### <strong>getStats</strong>

- @desc A user's coding activity for the given time range.<br>
- @scope read_stats<br>
- @param userId users wakatime id<br>
- @param range RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)<br>
- @param timeout optional: timeout in seconds<br>
- @param writes_only optional: only return write data<br>
- @param project optional: project name<br>
- @returns Stats data for a user.<br>
- @example await getStats("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", RANGE.LAST_7_DAYS);

```js
let getStats = await wakaClient.getStats(myWakaId, wakatime.RANGE.LAST_7_DAYS);
```

#### <strong>getMyStats</strong>

- @desc A user's coding activity for the given time range.<br>
- @scope read_stats<br>
- @param range RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)<br>
- @param timeout optional: timeout in seconds<br>
- @param writes_only optional: only return write data<br>
- @param project optional: project name<br>
- @returns Stats data for a user.<br>
- @example await getStats("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", RANGE.LAST_7_DAYS);

```js
let getMyStats = await wakaClient.getMyStats(wakatime.RANGE.LAST_7_DAYS);
```

#### <strong>getUserProjects</strong>

- @desc List of WakaTime projects for a user. <br>
- @scope read_logged_time<br>
- @param userId users wakatime id<br>
- @param query optional: Filter project names by a search term.<br>
- @returns Gets a users projects.<br>
- @example await getUserProjects("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserProjects = await wakaClient.getUserProjects(myWakaId);
```

#### <strong>getMyProjects</strong>

- @desc List of WakaTime projects for a user. <br>
- @scope read_logged_time<br>
- @param query optional: Filter project names by a search term.<br>
- @returns Gets a users projects.<br>
- @example await getUserProjects("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserProjects = await wakaClient.getMyProjects(myWakaId);
```

#### <strong>getPrivateLeaderboardsLeaders</strong>

- @desc List of users in this private leaderboard ranked by coding activity in descending order. <br>
- @scope read_private_leaderboards<br>
- @param userId users wakatime id<br>
- @param board board name<br>
- @param language optional: language name<br>
- @param country_code optional: country code<br>
- @param page optional: page number<br>
- @returns Gets a users Leaderboards.<br>
- @example await getUserLeaderboard("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime");<br>

```js
let getPrivateLeaderboardsLeaders = await wakaClient.getPrivateLeaderboardsLeaders(myWakaId, "cee8a02b-147f-4881-9b43-5d193fb77d32");
```

#### <strong>getMyPrivateLeaderboardsLeaders</strong>

- @desc List of users in this private leaderboard ranked by coding activity in descending order. <br>
- @param board board name<br>
- @param language optional: language name<br>
- @param country_code optional: country code<br>
- @param page optional: page number<br>
- @returns Gets a users Leaderboards.<br>
- @example await getUserLeaderboard("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime");<br>

```js
let getMyPrivateLeaderboardsLeaders = await wakaClient.getMyPrivateLeaderboardsLeaders("cee8a02b-147f-4881-9b43-5d193fb77d32");
```

#### <strong>getPrivateLeaderboards</strong>

- @desc List of users in your private leaderboard ranked by coding activity in descending order. <br>
- @param board board name <br>
- @param language optional: language name <br>
- @param country_code optional: country code <br>
- @param page optional: page number <br>
- @returns Gets current users Leaderboards. <br>
- @example await getPrivateLeaderboards("wakatime");

```js
let getPrivateLeaderboards = await wakaClient.getPrivateLeaderboards(myWakaId);
```

#### <strong>getMyPrivateLeaderboards</strong>

- @desc List of users in your private leaderboard ranked by coding activity in descending order. <br>
- @param board board name<br>
- @param language optional: language name<br>
- @param country_code optional: country code<br>
- @param page optional: page number<br>
- @returns Gets current users Leaderboards.<br>
- @example await getMyPrivateLeaderboardsLeaders("wakatime");

```js
let getMyPrivateLeaderboards = await wakaClient.getMyPrivateLeaderboards(myWakaId);
```

#### <strong>getUsersOrgs</strong>

- @desc List a user’s organizations. <br>
- @scope read_orgs<br>
- @param userId users wakatime id<br>
- @returns Gets a users Orgs.<br>
- @example await getUserOrgs("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUsersOrgs = await wakaClient.getUsersOrgs(myWakaId);
```

#### <strong>getMyOrgs</strong>

- @desc List a user’s organizations.
- @returns Gets current users Orgs.
- @example await getMyOrgs();

```js
let getMyOrgs = await wakaClient.getMyOrgs();
```

#### <strong>getUsersOrgDashboard</strong>

- @desc List a user’s organizations.
- @scope read_orgs
- @param userId users wakatime id
- @param org org UUID
- @returns Gets a users Org Dashboards.
- @example await getUsersOrgDashboard("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime");

```js
let getUsersOrgDashboard = await wakaClient.getUsersOrgDashboard(myWakaId, process.env.ORG);
```

#### <strong>getMyOrgsDashboard</strong>

- @desc List the organization’s dashboards.
- @param org org UUID
- @returns Gets current users Org Dashboards.
- @example await getMyOrgsDashboard("wakatime");

```js
let getMyOrgsDashboard = await wakaClient.getMyOrgsDashboard(process.env.ORG);
```

#### <strong>getOrgDashboardMembers</strong>

- @desc List an organization’s members.
- @scope read_orgs
- @param userId users wakatime id
- @param org org UUID
- @param dashboard dashboard name
- @returns Gets a users Org Dashboard.

```js
let getOrgDashboardMembers = await wakaClient.getOrgDashboardMembers(myWakaId, process.env.ORG, process.env.DASHBOARD);
```

#### <strong>getMyOrgDashboardMembers</strong>

- @desc List your organization’s members.
- @param org org UUID
- @param dashboard dashboard UUID
- @returns Gets current users Org Projects.
- @example await getMyOrgDashboardMembers("wakatime", "wakatime");

```js
let getMyOrgDashboardMembers = await wakaClient.getMyOrgDashboardMembers(process.env.ORG, process.env.DASHBOARD);
```

#### <strong>orgDashboardMemberSummaries</strong>

- @desc An organization dashboard member’s coding activity for the given time range as an array of summaries segmented by day.
- @scope read_orgs
- @param userId users wakatime id
- @param org org UUID
- @param dashboard dashboard UUID
- @param member member name
- @param start start date
- @param end end date
- @param project optional: project name
- @param branches optional: branch name
- @param range optional: RANGE enum value (LAST_7_DAYS, LAST_30_DAYS, LAST_6_MONTHS, LAST_YEAR)
- @returns Gets a users Org Dashboard Summaries.
- @example await orgDashboardMemberSummaries("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime", "wakatime", "nick22985", "2019-01-01", "2020-01-31");

```js
let orgDashboardMemberSummaries = await wakaClient.orgDashboardMemberSummaries(
	myWakaId,
	process.env.ORG,
	process.env.DASHBOARD,
	"nick22985",
	"2021-15-12",
	"2021-19-12"
);
```

#### <strong>orgDashboardMemberDurations</strong>

- @desc A dashboard member's coding activity for the given day as an array of durations.
- @scope read_orgs
- @param userId users wakatime id
- @param org org UUID
- @param dashboard dashboard UUID
- @param member member name
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @returns Gets a users Org Dashboard Member Durations.
- @example await orgDashboardMemberDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "wakatime", "wakatime", "nick22985", "2019-01-01");

```js
let orgDashboardMemberDurations = await wakaClient.orgDashboardMemberDurations(
	myWakaId,
	process.env.ORG,
	process.env.DASHBOARD,
	myWakaId,
	"2021-15-12"
);
```

#### <strong>getMyOrgDashboardMemberDurations</strong>

- @desc A dashboard member's coding activity for the given day as an array of durations.
- @param org org UUID
- @param dashboard dashboard UUID
- @param member member name
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @returns Gets current users Org Projects.
- @example await getMyOrgDashboardMemberDurations("wakatime", "wakatime", "nick22985", "2019-01-01");

```js
let getMyOrgDashboardMemberDurations = await wakaClient.getMyOrgDashboardMemberDurations(
	process.env.ORG,
	process.env.DASHBOARD,
	myWakaId,
	"2021-15-12"
);
```

#### <strong>getMeta</strong>

- @desc A dashboard member's coding activity for the given day as an array of durations.
- @returns Gets information about WakaTime.
- @example await getWakaTimeInfo();

```js
let getMeta = await wakaClient.getMeta();
```

#### <strong>getUserMachineNames</strong>

- @desc List of machines for this user.
- @scope read_logged_time
- @param userId users wakatime id
- @returns Gets a users Machine names.
- @example await getMachines("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserMachineNames = await wakaClient.getUserMachineNames(myWakaId);
```

#### <strong>getMyMachineNames</strong>

- @desc List of machines for this user.
- @returns Gets current users Machine names.
- @example await getMyMachineNames();

```js
let getMyMachineNames = await wakaClient.getMyMachineNames(myWakaId);
```

#### <strong>getLeaders</strong>

- @desc List of users ranked by coding activity in descending order.
- @param language language name
- @param is_hireable optional: true or false
- @param country_code optional: country code
- @param page optional: page number
- @returns Gets a list of Leaders.
- @example await getLeaders("python");

```js
let getLeaders = await wakaClient.getLeaders("JavaScript");
```

#### <strong>getUserHeartbeats</strong>

- @desc A user's heartbeats sent from plugins for the given day as an array.
- @scope read_logged_time
- @param userId users wakatime id
- @param date date
- @returns get a users Heartbeats.
- @example await getUserHeartbeats("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");

```js
let getUserHeartbeats = await wakaClient.getUserHeartbeats(myWakaId, "2021-28-12");
```

#### <strong>getMyHeartbeats</strong>

- @desc A user's heartbeats sent from plugins for the given day as an array.
- @param date date
- @returns get current users Heartbeats.
- @example await getMyHeartbeats("2019-01-01");

```js
let getMyHeartbeats = await wakaClient.getMyHeartbeats("2021-28-12");
```

#### <strong>getUserGoals</strong>

- @desc List a user’s goals.
- @scope read_logged_time
- @param userId users wakatime id
- @returns get a users Heartbeats.
- @example await getUserGoals("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserGoals = await wakaClient.getUserGoals(myWakaId);
```

#### <strong>getMyGoals</strong>

- @desc List a user’s goals.
- @returns get current users Heartbeats.
- @example await getMyGoals();

```js
let getMyGoals = await wakaClient.getMyGoals();
```

#### <strong>getUserExternalDurations</strong>

- @desc A user's external durations for the given day.
- @scope read_logged_time
- @param userId users wakatime id
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @param timezone optional: timezone
- @returns gets a users external durations on a given day
- @example await getUserExternalDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");

```js
let getUserExternalDurations = await wakaClient.getUserExternalDurations(myWakaId, "2021-28-12");
```

#### <strong>getMyExternalDurations</strong>

- @desc A user's external durations for the given day.
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @param timezone optional: timezone
- @returns gets a users external durations on a given day

```js
let getMyExternalDurations = await wakaClient.getMyExternalDurations("2021-28-12");
```

#### <strong>getEditors</strong>

- @desc List of WakaTime IDE plugins, latest plugin versions, and their color used on WakaTime charts.
- @param unreleased Show unreleased editor plugins
- @returns List of WakaTime IDE plugins versions
- @example await getEditors();

```js
let getEditors = await wakaClient.getEditors();
```

#### <strong>getUserDurations</strong>

- @desc A user's coding activity for the given day as an array of durations
- @scope read_logged_time
- @param userId users wakatime id
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @param timeout optional: timeout
- @param writes_only optional: true or false
- @param timezone optional: timezone
- @param slice_by optional: DEFAULT Entity enum: entity, language, dependencies, os, editor, category or machine
- @returns Gets a users durations.
- @example await getUserDurations("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "2019-01-01");

```js
let getUserDurations = await wakaClient.getUserDurations(myWakaId, "2021-28-12");
```

#### <strong>getMyDurations<string>

- @desc Your coding activity for the given day as an array of durations
- @scope read_logged_time
- @param date date
- @param project optional: project name
- @param branches optional: branch name
- @param timeout optional: timeout
- @param writes_only optional: true or false
- @param timezone optional: timezone
- @param slice_by optional: DEFAULT Entity enum: entity, language, dependencies, os, editor, category or machine
- @returns Gets a users durations.
- @example await getUserDurations("2019-01-01");

```js
let getMyDurations = await wakaClient.getMyDurations("2021-28-12");
```

#### <strong>getUserDataDump</strong>

- @desc List data exports for the user.
- @scope read_logged_time
- @param userId users wakatime id
- @returns List of data exports for the user
- @example await getUserDataDump("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserDataDump = await wakaClient.getUserDataDump(myWakaId);
```

#### <strong>getMyDataDump</strong>

- @desc List data exports for the user.
- @returns List of data exports for the user
- @example await getMyDataDump();

```js
let getMyDataDump = await wakaClient.getMyDataDump(myWakaId);
```

#### <strong>getUserCommits</strong>

- @desc List of commits for a WakaTime project showing the time spent coding in each commit.
- @scope read_logged_time
- @param userId users wakatime id
- @param project project name
- @param author optional: author name
- @param branch optional: branch name
- @param page optional: page number
- @returns List of commits for the user
- @example await getUserCommits("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserCommits = await wakaClient.getUserCommits(myWakaId);
```

#### <strong>getMyCommits</strong>

- @desc List of commits for a WakaTime project showing the time spent coding in each commit.
- @param project optional: project name
- @param author optional: author name
- @param branch optional: branch name
- @param page optional: page number
- @returns List of commits for the current user
- @example await getMyCommits();

```js
let getMyCommits = await wakaClient.getMyCommits();
```

#### <strong>getUserCommit</strong>

- @desc A single commit from a WakaTime project showing the time spent coding on the commit.
- @scope read_logged_time
- @param userId users wakatime id
- @param project project name
- @param hash commit hash
- @param branch optional: branch name
- @returns List a user commits for a given commit hash
- @example await getUserCommit("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e", "my-project", "1234567890");

```js
let getUserCommit = await wakaClient.getUserCommit(myWakaId, "Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050");
```

#### <strong>getMyCommit</strong>

- @desc A single commit from a WakaTime project showing the time spent coding on the commit.
- @param project optional: project name
- @param hash optional: commit hash
- @param branch optional: branch name
- @returns List the current user commits for a given commit hash
- @example await getMyCommit("my-project", "1234567890");

```js
let getMyCommit = await wakaClient.getMyCommit("Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050");
```

#### <strong>getUserAllTimeSinceToday</strong>

- @desc The total time logged since account created, available even for Free accounts.
- @scope read_stats
- @param userId users wakatime id
- @param project optional: project name
- @returns The total time logged since account created. Even for free accounts
- @example await getUserAllTimeSinceToday("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");

```js
let getUserAllTimeSinceToday = await wakaClient.getUserAllTimeSinceToday(myWakaId);
```

#### <strong>getMyAllTimeSinceToday</strong>

- @desc The total time logged since account created, available even for Free accounts.
- @scope read_stats
- @param userId users wakatime id
- @param project optional: project name
- @returns The total time logged since account created. Even for free accounts
- @example await getMyAllTimeSinceToday();

```js
let getMyAllTimeSinceToday = await wakaClient.getMyAllTimeSinceToday(myWakaId);
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)

## ✍️ Authors <a name = "authors"></a>

- [@nick22985](https://github.com/nick22985)
