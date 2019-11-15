const filterCitiesforAutoSuggest = (input, cities) => {
	const cityInputMakeString = input.trim().toLowerCase();
	const cityLength = input.length;

	const suggestedCities = cities.filter(
		(city) =>
			city.name.toLowerCase().slice(0, cityLength) === cityInputMakeString
	);

	return suggestedCities.map((city) => city.name);
};

export default filterCitiesforAutoSuggest;

// const getSuggestions = value => {
//     if (!value) { return "" }
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;

//     return inputLength === 0 ? [] : cities.filter(city =>
//         city.name.toLowerCase().slice(0, inputLength) === inputValue
//     );
// };
