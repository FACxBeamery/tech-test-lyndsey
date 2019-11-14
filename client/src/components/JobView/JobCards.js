import React from "react";

const JobCards = ({ jobs }) => {
	console.log("reached cards");
	return jobs.map((job) => (
		<div key={job.id} name={job.id}>
			<p key={job.title}>{job.title}</p>
			<p key={job.type}>{job.type}</p>
			<p key={job.location}>{job.location}</p>
			<p key={job.company}>{job.company}</p>
		</div>
	));
};

export default JobCards;
