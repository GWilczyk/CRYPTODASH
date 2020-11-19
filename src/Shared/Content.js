import React from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => {
	return (
		<AppContext.Consumer>
			{({ coinList, prices, firstVisit }) => {
				if (!coinList) {
					return <div>Loading coins…</div>;
				}
				if (!firstVisit && !prices) {
					return <div>Loading prices…</div>;
				}
				return <div>{children}</div>;
			}}
		</AppContext.Consumer>
	);
};

export default Content;
