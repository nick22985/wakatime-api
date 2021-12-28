const wakatime = require("../lib");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;

const wakaClient = new wakatime.WakaTimeApi(wakatime_api_key);
const myWakaId = "06ef56ec-e763-432c-a1cc-83e10de5b5a3";

test("GetUser", async () => {
	let getUser = await wakaClient.getUser(myWakaId);
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
// jest.setTimeout(100000);
// test("getStats", async () => {
// 	let getStats = await wakaClient.getStats(myWakaId, wakatime.RANGE.LAST_7_DAYS).catch((err) => {
// 		console.log(err);
// 		throw err;
// 	});
// });

// test("getMyStats", async () => {
// 	let getMyStats = await wakaClient.getMyStats(wakatime.RANGE.LAST_7_DAYS).catch((err) => {
// 		console.log(err);
// 		throw err;
// 	});
// });

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
	let getPrivateLeaderboardsLeaders = await wakaClient.getPrivateLeaderboardsLeaders(myWakaId, "test").catch((err) => {
		console.log(err);
		throw err;
	});
});

test("getMyPrivateLeaderboardsLeaders", async () => {
	let getMyPrivateLeaderboardsLeaders = await wakaClient.getMyPrivateLeaderboardsLeaders(myWakaId, "test").catch((err) => {
		console.log(err);
		throw err;
	});
});
