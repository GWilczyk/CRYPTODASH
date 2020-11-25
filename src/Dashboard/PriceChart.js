import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';

import HighchartsConfig from './HighchartsConfig';

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{() => (
				<Tile>
					<ReactHighcharts config={HighchartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
};

export default PriceChart;
