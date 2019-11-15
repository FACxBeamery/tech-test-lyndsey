import React from "react";

import JobCards from "./JobCards";
import styles from "./jobview.module.css";

const JobView = ({ jobs, locationSearched }) => {
	const JobViewHead = ({ locationSearched }) => {
		return (
			<h2 key={locationSearched}>I want a job in.. {locationSearched}</h2>
		);
	};

	return (
		<div className={styles["job-search-container"]}>
			<JobViewHead locationSearched={locationSearched}></JobViewHead>
			<div
				htmlFor="job-cards-container"
				data-testid="job-cards-container"
				className={styles["job-cards-container"]}
			>
				<JobCards jobs={jobs}></JobCards>
			</div>
		</div>
	);
};

export default JobView;
