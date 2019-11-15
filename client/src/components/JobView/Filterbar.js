import React from "react";
import styles from "./filterbar.module.css";

const Filterbar = ({ jobs, setTypesList }) => {
	const positions = ["Full Time", "Part Time", "Contact"];

	const DropdownOptions = () => {
		const initialArray = [
			<option value key="All">
				All
			</option>
		];
		return initialArray.concat(
			positions.map((option) => (
				<option value={option} key={option}>
					{option}
				</option>
			))
		);
	};

	const handleSelectChange = (event) => {
		event.preventDefault();
	};

	return (
		<div className={styles["filterbar-container"]}>
			<select
				value="select-dropdown"
				onChange={handleSelectChange}
				name="select-dropdown"
				id="select-dropdown"
			>
				<DropdownOptions />
			</select>
		</div>
	);
};
export default Filterbar;
