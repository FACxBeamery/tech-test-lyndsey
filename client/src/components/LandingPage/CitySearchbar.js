import React from "react";
import styles from "./citysearchbar.module.css";
import filterCitiesforAutoSuggest from "../../utils/filterCitiesforAutoSuggest"

const CitySearchbar = ({ setLocation }) => {
    const [searchText, setSearchText] = React.useState(null);
    const [showSuggestions, setShowSuggestions] = React.useState(false);
    const [suggestionThatMatches, setSuggestionThatMatches] = React.useState(0)
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([])


    const SuggestionsList = ({ filteredSuggestions, suggestionThatMatches, setSearchText, setFilteredSuggestions, setShowSuggestions, setSuggestionThatMatches }) => {

        const handleClickSuggestion = (e) => {
            setSearchText(e.target.innerText);
            console.log(e.target.innerText, "inside click suggestion")
            setSuggestionThatMatches(0);
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
        console.log(filteredSuggestions, "filter here")
        return filteredSuggestions.length ? (
            < ul className={styles["suggestions-list"]} >
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    if (index === suggestionThatMatches) {
                        className = "suggestion-match";
                    }
                    return (
                        <li
                            className={styles[className]}
                            key={suggestion}
                            onClick={(e) => handleClickSuggestion(e)}
                        >
                            {suggestion}
                        </li>
                    );
                })}
            </ul >


        ) : null
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(searchText);
        setSearchText("");


    }

    const handleSearchbarTextChange = (e) => {
        setSearchText(e.target.value);
        console.log(filterCitiesforAutoSuggest(), "array")
        if (e.target.value.length > 1) {
            setShowSuggestions(true);
            console.log(filteredSuggestions, "before set")
            setFilteredSuggestions(
                filterCitiesforAutoSuggest()
            );

        } else {
            setShowSuggestions(false);
        }

    }


    const handleKeyboardCommands = (e) => {


        if (showSuggestions) {
            if (e.keyCode === 13) {
                e.preventDefault();
                setSuggestionThatMatches(0);
                setShowSuggestions(false);
                setSearchText(filteredSuggestions[suggestionThatMatches]);
            }

            else if (e.keyCode === 38) {
                if (suggestionThatMatches === 0) {
                    return;
                }
                setSuggestionThatMatches(suggestionThatMatches - 1);
            }
            else if (e.keyCode === 40) {
                if (suggestionThatMatches === filteredSuggestions.length - 1) {

                    return;
                }

                setSuggestionThatMatches(suggestionThatMatches + 1);

            }
        }
    }


    return (
        <form onSubmit={handleSubmit} className={styles["city-searchbar-form"]}>
            <label
                htmlFor={`citySearchbar`}
                className={styles["city-searchbar-label"]}
            >What city are you searching in?</label>
            <div>
                <input
                    type="text"
                    name="citySearchbar"
                    id="citySearchbar"
                    onChange={(e) => handleSearchbarTextChange(e)}
                    onKeyDown={(e) => handleKeyboardCommands(e)}
                    className={styles["city-searchbar-input"]}
                    value={searchText}
                ></input>
                {showSuggestions ? (
                    <SuggestionsList
                        filterSuggestions={filteredSuggestions}
                        suggestionThatMatches={suggestionThatMatches}
                        setSearchText={setSearchText}
                        setFilteredSuggestions={setFilteredSuggestions}
                        setShowSuggestions={setShowSuggestions}
                        setSuggestionThatMatches={setSuggestionThatMatches}

                    />
                ) : null}
                <button
                    type="submit"
                    className={styles["city-searchbar-button"]}

                >
                </button>
            </div>
        </form >
    )
}



export default CitySearchbar; 