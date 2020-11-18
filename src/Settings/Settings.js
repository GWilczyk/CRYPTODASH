import React from 'react';
import Page from '../Shared/Page';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Search from './Search';
import CoinGrid from './CoinGrid';

function Settings() {
	return (
		<Page name='settings'>
			<WelcomeMessage />
			<CoinGrid topSection />
			<ConfirmButton />
			<Search />
			<CoinGrid />
		</Page>
	);
}

export default Settings;
