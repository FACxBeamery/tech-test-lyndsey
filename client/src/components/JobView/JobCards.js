import React from "react";
import styles from "./jobcards.module.css";

const JobCards = ({ jobs }) => {
	console.log(jobs);
	return jobs.map((job) => (
		<div key={job.id} name={job.id} className={styles["card"]}>
			<p key={job.title}>Job: {job.title}</p>
			<p key={job.type}>type: {job.type}</p>
			<p key={job.location}>location: {job.location}</p>
			<p key={job.company}>company: {job.company}</p>

			<a target="_blank" href={job.url}>
				{" "}
				<button>Click to Apply</button>
			</a>
		</div>
	));
};

export default JobCards;
