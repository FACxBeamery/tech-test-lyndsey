import React from "react";
import styles from "./locationSearchbar.module.css";
import filterCitiesforAutoSuggest from "../../utils/filterCitiesforAutoSuggest";
const SearchbarContext = React.createContext();

const SubmitButton = () => {
	return (
		<button type="submit" className={styles["form-submit-button"]}>
			GO
		</button>
	);
};
const Searchbar = () => {
	const {
		searchText,
		setSearchText,
		showSuggestions,
		setShowSuggestions,
		suggestionThatMatches,
		setSuggestionThatMatches,
		filteredSuggestions,
		setFilteredSuggestions
	} = React.useContext(SearchbarContext);

	const handleSearchbarTextChange = (
		e,
		setSearchText,
		setShowSuggestions,
		setFilteredSuggestions
	) => {
		e.preventDefault();
		const inputValue = e.target.value;

		setSearchText(inputValue);

		if (inputValue.length > 0) {
			setShowSuggestions(true);

			setFilteredSuggestions(filterCitiesforAutoSuggest(inputValue));
		} else {
			setShowSuggestions(false);
		}
	};

	const handleKeyboardCommands = (
		e,
		showSuggestions,
		setShowSuggestions,
		suggestionThatMatches,
		setSearchText,
		setSuggestionThatMatches
	) => {
		if (showSuggestions) {
			if (e.keyCode === 13) {
				e.preventDefault();
				setSuggestionThatMatches(0);
				setShowSuggestions(false);
				setSearchText(filteredSuggestions[suggestionThatMatches]);
			} else if (e.keyCode === 38) {
				if (suggestionThatMatches === 0) {
					return;
				}
				setSuggestionThatMatches(suggestionThatMatches - 1);
			} else if (e.keyCode === 40) {
				if (suggestionThatMatches === filteredSuggestions.length - 1) {
					return;
				}

				setSuggestionThatMatches(suggestionThatMatches + 1);
			}
		}
	};
	return (
		<div>
			<input
				type="text"
				name="locationSearchbar"
				id="locationSearchbar"
				autoComplete="off"
				onChange={(e) =>
					handleSearchbarTextChange(
						e,
						setSearchText,
						setShowSuggestions,
						setFilteredSuggestions
					)
				}
				onKeyDown={(e) =>
					handleKeyboardCommands(
						e,
						showSuggestions,
						setShowSuggestions,
						suggestionThatMatches,
						setSearchText,
						setSuggestionThatMatches
					)
				}
				className={styles["location-searchbar-input"]}
				value={searchText}
			></input>
		</div>
	);
};

const SuggestionsList = () => {
	const {
		searchText,
		setSearchText,
		showSuggestions,
		setShowSuggestions,
		suggestionThatMatches,
		setSuggestionThatMatches,
		filteredSuggestions,
		setFilteredSuggestions
	} = React.useContext(SearchbarContext);

	const handleClickSuggestion = (e) => {
		setSearchText(e.target.textContent);

		setSuggestionThatMatches(0);
		setFilteredSuggestions([]);
		setShowSuggestions(false);
	};

	return filteredSuggestions.length ? (
		<ul>
			{filteredSuggestions.map((suggestion, index) => {
				let className;
				if (index === suggestionThatMatches) {
					className = "suggestion-match";
				}
				return (
					<li
						className={styles[className]}
						key={suggestion}
						onClick={handleClickSuggestion}
					>
						{suggestion}
					</li>
				);
			})}
		</ul>
	) : null;
};

const LocationSearchbar = ({ setLocationSearched }) => {
	const [searchText, setSearchText] = React.useState("");
	const [showSuggestions, setShowSuggestions] = React.useState(false);
	const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
	const [suggestionThatMatches, setSuggestionThatMatches] = React.useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocationSearched(searchText);
	};
	return (
		<SearchbarContext.Provider
			value={{
				searchText,
				setSearchText,
				showSuggestions,
				setShowSuggestions,
				suggestionThatMatches,
				setSuggestionThatMatches,
				filteredSuggestions,
				setFilteredSuggestions
			}}
		>
			<form
				onSubmit={handleSubmit}
				className={styles["location-searchbar-form"]}
			>
				<Searchbar setLocationSearched={setLocationSearched}>
					{" "}
				</Searchbar>

				{showSuggestions ? <SuggestionsList /> : null}

				<SubmitButton />
			</form>
		</SearchbarContext.Provider>
	);
};

export default LocationSearchbar;
