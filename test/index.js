const wakatime = require("../lib");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;

const wakaClient = new wakatime.WakaTimeApi(wakatime_api_key);
const myWakaId = process.env.WAKATIMEID;

async function run() {
	let getMyDurations = await wakaClient.getMyDurations("Dec 29 2021").catch((err) => {
		console.log(err);
		throw err;
	});
	console.log(getMyDurations);
}

run();
