import React from 'react';
import LocationSearchbar from "./components/LandingPage/LocationSearchbar";
import getJobs from "./utils/getJobs"
//import styles from './App.module.css';
//components
//utils



function App() {
  const [locationSearched, setLocationSearched] = React.useState(null);
  const [jobs, setJobs] = React.useState([]);
  const [locations, setLocationsList] = React.useState([]);
  const [types, setTypesList] = React.useState([]);

  //   React.useEffect(() => {
  //     const setData = () => {
  //         getJobs().then((data) => {
  //             setJobs(data);
  //             setLocationsList(getLocations(data));
  //            setTypesList(getTypes(data))
  //         });
  //     };
  //     setData();
  // }, []);
  return (
    <>



      <LocationSearchbar setLocationSearched={setLocationSearched} ></LocationSearchbar>



    </>
  )

}

export default App;
