import React from 'react';
import CitySearchbar from "./components/LandingPage/CitySearchbar"
//import styles from './App.module.css';
//components
//utils


function App() {
  const [location, setLocation] = React.useState(null);

  return (

    <CitySearchbar setLocation={setLocation}></CitySearchbar>

  )
}

export default App;
