import React from "react";
import styles from "./filterbar.module.css";
import filterJobsByType from "../../utils/filterJobsByType";

const Filterbar = ({ filteredJobs, setFilteredJobs, jobs, setJobs }) => {
	const [type, setType] = React.useState(null);
	const positionTypes = ["Full Time", "Part Time", "Contract"];

	React.useEffect(() => {
		if (filteredJobs) {
			setFilteredJobs(filterJobsByType(type, jobs));
		}
	}, [setFilteredJobs, type]);

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

	const handleSelectChange = (e, filteredJobs, setFilteredJobs, setType) => {
		e.preventDefault();
		console.log("job selected", e.target.value);
		console.log(
			"what is returned by filter function",
			filterJobsByType(e.target.value, filteredJobs)
		);
		setType(e.target.value);

		setFilteredJobs(filterJobsByType(e.target.value, filteredJobs));
	};

	return (
		<div className={styles["filterbar-container"]}>
			<p> Filter by Type:</p>
			<select
				value={filteredJobs}
				onChange={(e) =>
					handleSelectChange(
						e,
						filteredJobs,
						setFilteredJobs,
						setType
					)
				}
				name="select-dropdown"
				id="select-dropdown"
			>
				<DropdownOptions />
			</select>
		</div>
	);
};
export default Filterbar;
