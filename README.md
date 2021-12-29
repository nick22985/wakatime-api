<h3 align="center">@nick22985/wakatime-api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/nick22985/wakatime-api.svg)](https://github.com/kylelobo/wakatime-api/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/nick22985/wakatime-api.svg)](https://github.com/kylelobo/wakatime-api/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

A `TypeScript NodeJs` client for the <a href="https://wakatime.com/developers#introduction">wakatime API</a>

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

###### Create a api instance

```js
import { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE } from "@nick22985/wakatime-api";

const client = new wakatime.WakatimeApi("Api-key");
```

or

```js
const wakatime = require("@nick22985/wakatime-api");

const client = new wakatime.WakatimeApi("Api-key");
```

###### Custom Base URL

```js
import { WakaTimeApi, RANGE, SLICE_BY, SUMMARY_RANGE } from "@nick22985/wakatime-api";

const client = new WakatimeApi("Api-key", "Custom-base-URL");
```

<br>

<h3><strong>getUser</strong></h3>
Gets a users stats.
<br>

```js
let getUser = await client.getUser("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
```

<h3><strong>getMe</strong></h3>

```js
let getMe = await wakaClient.getMe();
```

<h3><strong>getUserAgents</strong></h3>

```js
let getUserAgents = await wakaClient.getUserAgents("1f89b85e-54a8-4f75-86a2-f9b7d47ba30e");
```

<h3><strong>getMyAgents</strong></h3>

```js
let getMyUserAgents = await wakaClient.getMyAgents();
```

<h3><strong>getMyUserAgents</strong></h3>

```js
let getMyUserAgents = await wakaClient.getMyUserAgents();
```

<h3><strong>getUserSummaries</strong></h3>

```js
let getMyUserAgents = await wakaClient.getUserSummaries(myWakaId, new Date().toISOString(), new Date().toISOString());
```

<h3><strong>getMySummaries</strong></h3>

```js
let getMySummaries = await wakaClient.getMySummaries(new Date().toISOString(), new Date().toISOString());
```

<h3><strong>getStatsAggregated</strong></h3>

```js
let getStatsAggregated = await wakaClient.getStatsAggregated("last_7_days");
```

<h3><strong>getStats</strong></h3>

```js
let getStats = await wakaClient.getStats(myWakaId, wakatime.RANGE.LAST_7_DAYS);
```

<h3><strong>getMyStats</strong></h3>

```js
let getMyStats = await wakaClient.getMyStats(wakatime.RANGE.LAST_7_DAYS);
```

<h3><strong>getUserProjects</strong></h3>

```js
let getUserProjects = await wakaClient.getUserProjects(myWakaId);
```

<h3><strong>getMyProjects</strong></h3>

```js
let getUserProjects = await wakaClient.getMyProjects(myWakaId);
```

<h3><strong>getPrivateLeaderboardsLeaders</strong></h3>

```js
let getPrivateLeaderboardsLeaders = await wakaClient.getPrivateLeaderboardsLeaders(myWakaId, "cee8a02b-147f-4881-9b43-5d193fb77d32");
```

<h3><strong>getMyPrivateLeaderboardsLeaders</strong></h3>

```js
let getMyPrivateLeaderboardsLeaders = await wakaClient.getMyPrivateLeaderboardsLeaders("cee8a02b-147f-4881-9b43-5d193fb77d32");
```

<h3><strong>getPrivateLeaderboards</strong></h3>

```js
let getPrivateLeaderboards = await wakaClient.getPrivateLeaderboards(myWakaId);
```

<h3><strong>getMyPrivateLeaderboards</strong></h3>

```js
let getMyPrivateLeaderboards = await wakaClient.getMyPrivateLeaderboards(myWakaId);
```

<h3><strong>getUsersOrgs</strong></h3>

```js
let getUsersOrgs = await wakaClient.getUsersOrgs(myWakaId);
```

<h3><strong>getMyOrgs</strong></h3>

```js
let getMyOrgs = await wakaClient.getMyOrgs();
```

<h3><strong>getUsersOrgDashboard</strong></h3>

```js
let getUsersOrgDashboard = await wakaClient.getUsersOrgDashboard(myWakaId, process.env.ORG);
```

<h3><strong>getMyOrgsDashboard</strong></h3>

```js
let getMyOrgsDashboard = await wakaClient.getMyOrgsDashboard(process.env.ORG);
```

<h3><strong>getOrgDashboardMembers</strong></h3>

```js
let getOrgDashboardMembers = await wakaClient.getOrgDashboardMembers(myWakaId, process.env.ORG, process.env.DASHBOARD);
```

<h3><strong>getMyOrgDashboardMembers</strong></h3>

```js
let getMyOrgDashboardMembers = await wakaClient.getMyOrgDashboardMembers(process.env.ORG, process.env.DASHBOARD);
```

<h3><strong>orgDashboardMemberSummaries</strong></h3>

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

<h3><strong>orgDashboardMemberDurations</strong></h3>

```js
let orgDashboardMemberDurations = await wakaClient.orgDashboardMemberDurations(
	myWakaId,
	process.env.ORG,
	process.env.DASHBOARD,
	myWakaId,
	"2021-15-12"
);
```

<h3><strong>getMyOrgDashboardMemberDurations</strong></h3>

```js
let getMyOrgDashboardMemberDurations = await wakaClient.getMyOrgDashboardMemberDurations(
	process.env.ORG,
	process.env.DASHBOARD,
	myWakaId,
	"2021-15-12"
);
```

<h3><strong>getMeta</strong></h3>

```js
let getMeta = await wakaClient.getMeta();
```

<h3><strong>getUserMachineNames</strong></h3>
```js
let getUserMachineNames = await wakaClient.getUserMachineNames(myWakaId)
```
<h3><strong>getMyMachineNames</strong></h3>

```js
let getMyMachineNames = await wakaClient.getMyMachineNames(myWakaId);
```

<h3><strong>getLeaders</strong></h3>

```js
let getLeaders = await wakaClient.getLeaders("JavaScript");
```

<h3><strong>getUserHeartbeats</strong></h3>

```js
let getUserHeartbeats = await wakaClient.getUserHeartbeats(myWakaId, "2021-28-12");
```

<h3><strong>getUserHeartbeats</strong></h3>

```js
let getUserHeartbeats = await wakaClient.getUserHeartbeats(myWakaId, "2021-28-12");
```

<h3><strong>getMyHeartbeats</strong></h3>

```js
let getUserHeartbeats = await wakaClient.getUserHeartbeats("2021-28-12");
```

<h3><strong>getUserGoals</strong></h3>

```js
let getUserGoals = await wakaClient.getUserGoals(myWakaId);
```

<h3><strong>getMyGoals</strong></h3>

```js
let getMyGoals = await wakaClient.getMyGoals();
```

<h3><strong>getUserExternalDurations</strong></h3>

```js
let getUserExternalDurations = await wakaClient.getUserExternalDurations(myWakaId, "2021-28-12");
```

<h3><strong>getMyExternalDurations</strong></h3>

```js
let getMyExternalDurations = await wakaClient.getMyExternalDurations("2021-28-12");
```

<h3><strong>getEditors</strong></h3>

```js
let getEditors = await wakaClient.getEditors();
```

<h3><strong>getUserDurations</strong></h3>

```js
let getUserDurations = await wakaClient.getUserDurations(myWakaId, "2021-28-12");
```

<h3><strong>getUserDataDump</strong></h3>

```js
let getUserDataDump = await wakaClient.getUserDataDump(myWakaId);
```

<h3><strong>getMyDataDump</strong></h3>

```js
let getMyDataDump = await wakaClient.getMyDataDump(myWakaId);
```

<h3><strong>getUserCommits</strong></h3>

```js
let getUserCommits = await wakaClient.getUserCommits(myWakaId);
```

<h3><strong>getMyCommits</strong></h3>

```js
let getMyCommits = await wakaClient.getMyCommits();
```

<h3><strong>getUserCommit</strong></h3>

```js
let getUserCommit = await wakaClient.getUserCommit(myWakaId, "Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050");
```

<h3><strong>getMyCommit</strong></h3>

```js
let getMyCommit = await wakaClient.getMyCommit("Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050");
```

<h3><strong>getAllTimeSinceToday</strong></h3>

```js
let getAllTimeSinceToday = await wakaClient.getAllTimeSinceToday(myWakaId);
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)

## ✍️ Authors <a name = "authors"></a>

- [@nick22985](https://github.com/nick22985)
