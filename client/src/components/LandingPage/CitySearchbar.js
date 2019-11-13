import React from "react";
import styles from "./citysearchbar.module.css";


const CitySearchbar = ({ searchText, setSearchText, setLocation }) => {

    const handleSearchbarTextChange = (e) => {
        e.persist();
        setSearchText(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchText) {
            setLocation(searchText);
            setSearchText("");

        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles["city-searchbar-form"]}>
            <label
                htmlFor={`citySearchbar`}
                className={styles["city-searchbar-label"]}
            >{`What city are you searching in?`}</label>
            <input
                type="text"
                value={searchText}
                name={`citySearchbar`}
                id="citySearchbar"
                onChange={handleSearchbarTextChange}
                className={styles["city-searchbar-input"]}
            ></input>

            <button
                type="submit"
                className={styles["city-searchbar-button"]}

            >
                Go
        </button>
        </form>
    )
}


export default CitySearchbar;