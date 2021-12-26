const wakatime = require("../lib/");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;
const wakaClient = new wakatime.WakatimeApi(wakatime_api_key);
const myWakaId = "06ef56ec-e763-432c-a1cc-83e10de5b5a3";

async function run() {
	console.log(wakatime.RANGE.LAST_7_DAYS);
	let getStats = await wakaClient.getMyStats("last_7_days");

	// console.log(getStats.data);
}

run();
