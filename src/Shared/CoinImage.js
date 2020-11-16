import React from 'react';

const CoinImage = ({ coin, style }) => {
	return (
		<img
			src={`http://cryptocompare.com/${coin.ImageUrl}`}
			alt={coin.Symbol}
			style={style || { height: '50px' }}
		/>
	);
};

export default CoinImage;
