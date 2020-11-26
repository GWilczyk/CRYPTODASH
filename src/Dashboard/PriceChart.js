import React from 'react';
import { Tile } from '../Shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import ChartSelect from './ChartSelect';

import HighchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const PriceChart = () => {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect }) => (
				<Tile>
					<ChartSelect
						defaultValue='months'
						onChange={event => changeChartSelect(event.target.value)}
					>
						<option value='days'>Days</option>
						<option value='weeks'>Weeks</option>
						<option value='months'>Months</option>
					</ChartSelect>
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
