import React from "react";
import styles from "./jobcards.module.css";

const JobCards = ({ jobs }) => {
	console.log(jobs);

	return jobs.map((job) => (
		<div key={job.id} name={job.id} className={styles["card"]}>
			<p data-testid={job.title} key={job.title}>
				Job: {job.title}
			</p>
			<p data-testid={job.type} key={job.type}>
				type: {job.type}
			</p>
			<p data-testid={job.location} key={job.location}>
				location: {job.location}
			</p>
			<p data-testid={job.company} key={job.company}>
				company: {job.company}
			</p>

			<a target="_blank" href={job.url}>
				{" "}
				<button>Click to Apply</button>
			</a>
		</div>
	));
	// ) : (
	// 	<p>No jobs there sorry!</p>
	// );
};

export default JobCards;
