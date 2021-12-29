const wakatime = require("../lib");
const dotenv = require("dotenv");
dotenv.config();
const wakatime_api_key = process.env.WAKATIME_API_KEY;

const wakaClient = new wakatime.WakaTimeApi(wakatime_api_key);
const myWakaId = process.env.WAKATIMEID;

async function run() {
	let a = await wakaClient.getUserAllTimeSinceToday(myWakaId).catch((err) => {
		console.log(err);
		throw err;
	});
	console.log(a);
}

run();
