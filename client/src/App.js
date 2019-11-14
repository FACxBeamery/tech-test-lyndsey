import React from "react";
import LocationSearchbar from "./components/LandingPage/LocationSearchbar";
import getJobs from "./utils/getJobs";
import JobView from "./components/JobView/JobView";
import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
	const [locationSearched, setLocationSearched] = React.useState(null);
	const [jobs, setJobs] = React.useState([]);
	const [locations, setLocationsList] = React.useState([]);
	const [types, setTypesList] = React.useState([]);

	React.useEffect(() => {
		const setJobDataAPI = async (locationSearched, setJobs) => {
			if (locationSearched) {
				const jobsReturned = await getJobs(locationSearched);
				setJobs(jobsReturned);

				//setLocationsList(getLocations(data));
				//setTypesList(getTypes(data))
			}
		};
		setJobDataAPI(locationSearched, setJobs);
	}, [locationSearched, setJobs]);
	return (
		<>
			<Header />
			{jobs ? (
				<JobView jobs={jobs} locationSearched={locationSearched} />
			) : null}
			<LocationSearchbar
				setLocationSearched={setLocationSearched}
			></LocationSearchbar>
		</>
	);
}

export default App;
