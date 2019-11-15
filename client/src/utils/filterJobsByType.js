const filterJobsByType = (type, jobs) => {
	console.log("what reaches inside the filter function", jobs);
	return jobs.filter((job) => {
		return job.type === type;
	});
};

export default filterJobsByType;
