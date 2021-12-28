const wakatime = require("../lib");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;

const wakaClient = new wakatime.WakaTimeApi(wakatime_api_key);
const myWakaId = process.env.WAKATIMEID;

test("GetUser", async () => {
	let getUser = await wakaClient.getUser(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("GetMe", async () => {
	let getMe = await wakaClient.getMe().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserAgents", async () => {
	let getUserAgents = await wakaClient.getUserAgents(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyUserAgents", async () => {
	let getMyUserAgents = await wakaClient.getMyUserAgents().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserSummaries", async () => {
	let getMyUserAgents = await wakaClient.getUserSummaries(myWakaId, new Date().toISOString(), new Date().toISOString()).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMySummaries", async () => {
	let getMySummaries = await wakaClient.getMySummaries(new Date().toISOString(), new Date().toISOString()).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getStatsAggregated", async () => {
	let getStatsAggregated = await wakaClient.getStatsAggregated("last_7_days").catch((err) => {
		console.log(err);
		throw err;
	});
});

// Long running tests
jest.setTimeout(100000);
test("getStats", async () => {
	let getStats = await wakaClient.getStats(myWakaId, wakatime.RANGE.LAST_7_DAYS).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyStats", async () => {
	let getMyStats = await wakaClient.getMyStats(wakatime.RANGE.LAST_7_DAYS).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserProjects", async () => {
	let getUserProjects = await wakaClient.getUserProjects(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyProjects", async () => {
	let getUserProjects = await wakaClient.getMyProjects(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getPrivateLeaderboardsLeaders", async () => {
	let getPrivateLeaderboardsLeaders = await wakaClient
		.getPrivateLeaderboardsLeaders(myWakaId, "cee8a02b-147f-4881-9b43-5d193fb77d32")
		.catch((err) => {
			console.log(err);
			throw err;
		});
});

test("getMyPrivateLeaderboardsLeaders", async () => {
	let getMyPrivateLeaderboardsLeaders = await wakaClient.getMyPrivateLeaderboardsLeaders("cee8a02b-147f-4881-9b43-5d193fb77d32").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getPrivateLeaderboards", async () => {
	let getPrivateLeaderboards = await wakaClient.getPrivateLeaderboards(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyPrivateLeaderboards", async () => {
	let getMyPrivateLeaderboards = await wakaClient.getMyPrivateLeaderboards(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUsersOrgs", async () => {
	let getUsersOrgs = await wakaClient.getUsersOrgs(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyOrgs", async () => {
	let getMyOrgs = await wakaClient.getMyOrgs().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUsersOrgDashboard", async () => {
	let getUsersOrgDashboard = await wakaClient.getUsersOrgDashboard(myWakaId, process.env.ORG).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyOrgsDashboard", async () => {
	let getMyOrgsDashboard = await wakaClient.getMyOrgsDashboard(process.env.ORG).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getOrgDashboardMembers", async () => {
	let getOrgDashboardMembers = await wakaClient.getOrgDashboardMembers(myWakaId, process.env.ORG, process.env.DASHBOARD).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyOrgDashboardMembers", async () => {
	let getMyOrgDashboardMembers = await wakaClient.getMyOrgDashboardMembers(process.env.ORG, process.env.DASHBOARD).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("orgDashboardMemberSummaries", async () => {
	let orgDashboardMemberSummaries = await wakaClient
		.orgDashboardMemberSummaries(myWakaId, process.env.ORG, process.env.DASHBOARD, myWakaId, "2021-15-12", "2021-19-12")
		.catch((err) => {
			console.log(err);
			throw err;
		});
});

test("orgDashboardMemberDurations", async () => {
	let orgDashboardMemberDurations = await wakaClient
		.orgDashboardMemberDurations(myWakaId, process.env.ORG, process.env.DASHBOARD, myWakaId, "2021-15-12")
		.catch((err) => {
			console.log(err);
			throw err;
		});
});

test("getMyOrgDashboardMemberDurations", async () => {
	let getMyOrgDashboardMemberDurations = await wakaClient
		.getMyOrgDashboardMemberDurations(process.env.ORG, process.env.DASHBOARD, myWakaId, "2021-15-12")
		.catch((err) => {
			console.log(err);
			throw err;
		});
});

test("getMeta", async () => {
	let getMeta = await wakaClient.getMeta().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserMachineNames", async () => {
	let getUserMachineNames = await wakaClient.getUserMachineNames(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyMachineNames", async () => {
	let getMyMachineNames = await wakaClient.getMyMachineNames(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getLeaders", async () => {
	let getLeaders = await wakaClient.getLeaders("JavaScript").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserHeartbeats", async () => {
	let getUserHeartbeats = await wakaClient.getUserHeartbeats(myWakaId, "2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserHeartbeats", async () => {
	let getUserHeartbeats = await wakaClient.getUserHeartbeats(myWakaId, "2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyHeartbeats", async () => {
	let getUserHeartbeats = await wakaClient.getUserHeartbeats("2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserGoals", async () => {
	let getUserGoals = await wakaClient.getUserGoals(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyGoals", async () => {
	let getMyGoals = await wakaClient.getMyGoals().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserExternalDurations", async () => {
	let getUserExternalDurations = await wakaClient.getUserExternalDurations(myWakaId, "2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyExternalDurations", async () => {
	let getMyExternalDurations = await wakaClient.getMyExternalDurations("2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getEditors", async () => {
	let getEditors = await wakaClient.getEditors().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserDurations", async () => {
	let getUserDurations = await wakaClient.getUserDurations(myWakaId, "2021-28-12").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserDataDump", async () => {
	let getUserDataDump = await wakaClient.getUserDataDump(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyDataDump", async () => {
	let getMyDataDump = await wakaClient.getMyDataDump(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserCommits", async () => {
	let getUserCommits = await wakaClient.getUserCommits(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyCommits", async () => {
	let getMyCommits = await wakaClient.getMyCommits().catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getUserCommit", async () => {
	let getUserCommit = await wakaClient.getUserCommit(myWakaId, "Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyCommit", async () => {
	let getMyCommit = await wakaClient.getMyCommit("Dev-Stats", "736ed941e069e2c910b86266243965ea745a8050").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getAllTimeSinceToday", async () => {
	let getAllTimeSinceToday = await wakaClient.getAllTimeSinceToday(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
});
