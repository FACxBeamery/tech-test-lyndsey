import React from 'react';
import CitySearchbar from "./components/LandingPage/CitySearchbar"
//import styles from './App.module.css';
//components
//utils


function App() {
  const [searchText, setSearchText] = React.useState("");
  const [location, setLocation] = React.useState(null);

  return (

    <CitySearchbar
      searchText={searchText}
      setSearchText={setSearchText}
      setLocation={setLocation}></CitySearchbar>

  )
}

export default App;
