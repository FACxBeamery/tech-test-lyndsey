const filterJobsByType = (type, jobs) => {
	return jobs.filter((job) => {
		return job.type === type;
	});
};

export default filterJobsByType;
