const axios = require("axios");

const getJobsAPI = async (location, type) => {
	let APIURL;

	const typeCriteria = `description=${type}`;
	const locationCriteria = `location=${location}`;

	if (type && !location) {
		APIURL = `https://jobs.github.com/positions.json?${typeCriteria}`;
	} else if (location && !type) {
		APIURL = `https://jobs.github.com/positions.json?${locationCriteria}`;
	} else if (location && type) {
		APIURL = `https://jobs.github.com/positions.json?${locationCriteria}&${typeCriteria}`;
	} else {
		APIURL = "https://jobs.github.com/positions.json";
	}

	let res = await axios.get(APIURL);

	let jobs = res.data;
	return jobs;
};

module.exports = getJobsAPI;
