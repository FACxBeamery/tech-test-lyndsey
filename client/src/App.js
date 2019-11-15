import React from "react";
import LocationSearchbar from "./components/LandingPage/LocationSearchbar";
import getJobs from "./utils/getJobs";
import JobView from "./components/JobView/JobView";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Filterbar from "./components/JobView/Filterbar";
import filterJobsByType from "./utils/filterJobsByType";

function App() {
	const [locationSearched, setLocationSearched] = React.useState(null);
	const [jobs, setJobs] = React.useState(null);
	const [filteredJobs, setFilteredJobs] = React.useState(null);

	React.useEffect(() => {
		const setJobDataAPI = async (locationSearched, setJobs) => {
			if (locationSearched) {
				const jobsReturned = await getJobs(locationSearched);
				setJobs(jobsReturned);
				setFilteredJobs(jobsReturned);
			}
		};
		setJobDataAPI(locationSearched, setJobs);
	}, [locationSearched, setJobs, setFilteredJobs]);

	return (
		<>
			<Header />
			{locationSearched ? (
				<Filterbar
					filteredJobs={filteredJobs}
					setFilteredJobs={setFilteredJobs}
					jobs={jobs}
				/>
			) : null}
			{filteredJobs ? (
				<div>
					<JobView
						jobs={filteredJobs}
						locationSearched={locationSearched}
					/>
				</div>
			) : null}

			<LocationSearchbar setLocationSearched={setLocationSearched} />
		</>
	);
}

export default App;
