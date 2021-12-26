const wakatime = require("../lib/");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;

const wakaClient = new wakatime.WakatimeApi(wakatime_api_key);
const myWakaId = "06ef56ec-e763-432c-a1cc-83e10de5b5a3";

test("GetUser", async () => {
	let getUser = await wakaClient.getUser(myWakaId);
});

test("GetMe", async () => {
	let getMe = await wakaClient.getMe();
});

test("getUserAgents", async () => {
	let getUserAgents = await wakaClient.getUserAgents(myWakaId);
});

test("getMyUserAgents", async () => {
	let getMyUserAgents = await expect(wakaClient.getMyUserAgents());
});

test("getUserSummaries", async () => {
	let getMyUserAgents = await wakaClient.getUserSummaries(myWakaId, new Date().toISOString(), new Date().toISOString());
});

test("getMySummaries", async () => {
	let getMySummaries = await wakaClient.getMySummaries(new Date().toISOString(), new Date().toISOString());
});

test("getStatsAggregated", async () => {
	let getStatsAggregated = await wakaClient.getStatsAggregated(new Date().toISOString(), new Date().toISOString());
});

//Long running tests
// jest.setTimeout(100000);
// test("getStats", async () => {
// 	let getStats = await wakaClient.getStats(myWakaId, wakatime.RANGE.LAST_7_DAYS);
// });

// test("getMyStats", async () => {
// 	let getMyStats = await wakaClient.getMyStats(wakatime.RANGE.LAST_7_DAYS);
// });

test("getUserProjects", async () => {
	let getUserProjects = await wakaClient.getUserProjects(myWakaId);
});

test("getMyProjects", async () => {
	let getUserProjects = await wakaClient.getMyProjects(myWakaId);
});

test("getPrivateLeaderboardsLeaders", async () => {
	let getPrivateLeaderboardsLeaders = await wakaClient.getPrivateLeaderboardsLeaders(myWakaId, "test");
});

test("getMyPrivateLeaderboardsLeaders", async () => {
	let getMyPrivateLeaderboardsLeaders = await wakaClient.getMyPrivateLeaderboardsLeaders(myWakaId, "test");
});
