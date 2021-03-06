const getJobsAPI = require("./getJobsAPI");

const handleJobs = async (req, res) => {
	// define location and type params here
	try {
		const jobs = await getJobsAPI(req.query.location);

		res.setHeader("Access-Control-Allow-Origin", "*");

		res.json(jobs);
		res.status(200);
	} catch (err) {
		res.status(404).send(err);
	}
};

module.exports = handleJobs;
