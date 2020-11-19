import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import fuzzy from 'fuzzy';
import { AppContext } from '../App/AppProvider';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
	${backgroundColor2};
	${fontSize2};
	border: 1px solid;
	color: #1163c9;
	height: 25px;
	place-self: center left;
`;

const handleFilter = _.debounce((inputValue, setFilteredCoins, coinList) => {
	// Get all the coin symbols
	let coinSymbols = Object.keys(coinList);
	// Get all the coin names, map symbol to name
	let coinNames = coinSymbols.map(symbole => coinList[symbole].CoinName);

	let allStringsToSearch = coinSymbols.concat(coinNames);
	let fuzzyResults = fuzzy
		.filter(inputValue, allStringsToSearch, {})
		.map(result => result.string);

	let filteredCoins = _.pickBy(coinList, (result, symKey) => {
		let coinName = result.coinName;
		return (
			_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
		);
	});

	setFilteredCoins(filteredCoins);
}, 750);

const filterCoins = (event, setFilteredCoins, coinList) => {
	let inputValue = event.target.value;
	if (!inputValue) {
		setFilteredCoins(null);
		return;
	}
	handleFilter(inputValue, setFilteredCoins, coinList);
};

const Search = () => {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinList }) => (
				<SearchGrid>
					<h2>Search all coins</h2>
					<SearchInput
						onKeyUp={event => filterCoins(event, setFilteredCoins, coinList)}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	);
};

export default Search;
