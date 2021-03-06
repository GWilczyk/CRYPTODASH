import React from 'react';
import styled, { css } from 'styled-components';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles';
import { SelectableTile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';

const JustifyLeft = styled.div`
	justify-self: left;
`;

const JustifyRight = styled.div`
	justify-self: right;
`;

const TickerPrice = styled.div`
	${fontSizeBig}
`;

const ChangePercent = styled.div`
	${props =>
		props.red
			? css`
					color: red;
			  `
			: css`
					color: green;
			  `}
`;

const ChangePercentage = ({ data }) => {
	return (
		<JustifyRight>
			<ChangePercent red={data.CHANGEPCT24HOUR < 0}>
				{numberFormat(data.CHANGEPCT24HOUR)}%
			</ChangePercent>
		</JustifyRight>
	);
};

const numberFormat = number => {
	return +(number + '').slice(0, 7);
};

const PriceTileStyled = styled(SelectableTile)`
	${props =>
		props.compact &&
		css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 10px;
			${fontSize3}
			justify-items: right;
		`}

	${props =>
		props.currentFavorite &&
		css`
			${greenBoxShadow};
			pointer-events: none;
		`}
`;

const PriceTileContent = ({
	sym,
	data,
	currentFavorite,
	setCurrentFavorite
}) => {
	return (
		<PriceTileStyled
			currentFavorite={currentFavorite}
			onClick={setCurrentFavorite}
		>
			<CoinHeaderGridStyled>
				<div> {sym} </div>
				<ChangePercentage data={data} />
			</CoinHeaderGridStyled>
			<TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
		</PriceTileStyled>
	);
};

const PriceTileCompact = ({
	sym,
	data,
	currentFavorite,
	setCurrentFavorite
}) => {
	return (
		<PriceTileStyled
			compact
			currentFavorite={currentFavorite}
			onClick={setCurrentFavorite}
		>
			<JustifyLeft> {sym} </JustifyLeft>
			<ChangePercentage data={data} />
			<div>${numberFormat(data.PRICE)}</div>
		</PriceTileStyled>
	);
};

const PriceTile = ({ price, index }) => {
	let sym = Object.keys(price)[0];
	let data = price[sym]['USD'];
	let TileClass = index < 5 ? PriceTileContent : PriceTileCompact;
	return (
		<AppContext.Consumer>
			{({ currentFavorite, setCurrentFavorite }) => (
				<TileClass
					sym={sym}
					data={data}
					currentFavorite={currentFavorite === sym}
					setCurrentFavorite={() => setCurrentFavorite(sym)}
				/>
			)}
		</AppContext.Consumer>
	);
};

export default PriceTile;
