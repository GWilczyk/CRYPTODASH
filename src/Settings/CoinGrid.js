import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

const getCoinsToDisplay = (coinList, favorites, topSection) => {
	return topSection ? favorites : Object.keys(coinList).slice(0, 100);
	//	return Object.keys(coinList).slice(0, topSection ? 10 : 100);
};

const CoinGrid = ({ topSection }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, favorites }) => (
				<CoinGridStyled>
					{getCoinsToDisplay(coinList, favorites, topSection).map(coinKey => (
						<CoinTile coinKey={coinKey} topSection={topSection} />
					))}
				</CoinGridStyled>
			)}
		</AppContext.Consumer>
	);
};

export default CoinGrid;
