import React from "react";
import styles from "./filterbar.module.css";
import filterJobsbyType from "../../utils/filterJobsByType";

const Filterbar = ({ jobs, setJobs }) => {
	const positionTypes = ["Full Time", "Part Time", "Contact"];

	const DropdownOptions = () => {
		const initialArray = [
			<option value key="All">
				All
			</option>
		];
		return initialArray.concat(
			positionTypes.map((option) => (
				<option value={option} key={option}>
					{option}
				</option>
			))
		);
	};

	const handleSelectChange = (e, setJobs) => {
		e.preventDefault();
		setJobs(filterJobsbyType(e.target.value));
	};

	return (
		<div className={styles["filterbar-container"]}>
			<p> Filter by Type:</p>
			<select
				value={jobs}
				onChange={(e) => handleSelectChange(e, setJobs)}
				name="select-dropdown"
				id="select-dropdown"
			>
				<DropdownOptions />
			</select>
		</div>
	);
};
export default Filterbar;
