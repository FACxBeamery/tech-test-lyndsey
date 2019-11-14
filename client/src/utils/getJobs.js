import axios from "axios";

const getJobs = async (location) => {
	console.log("location", location);

	let res = await axios.get(
		`http://localhost:4000/jobs?location=${location}`
	);
	let jobData = res.data;
	console.log(res.data);
	return jobData;
};

export default getJobs;
