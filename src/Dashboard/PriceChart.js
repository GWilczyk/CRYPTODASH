import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';

import HighchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{({ historical }) => (
				<Tile>
					{historical ? (
						<ReactHighcharts config={HighchartsConfig(historical)} />
					) : (
						<div>Loading Historical Data</div>
					)}
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default PriceChart;
