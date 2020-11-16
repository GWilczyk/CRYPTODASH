import React from 'react';
import Page from '../Shared/Page';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import CoinGrid from './CoinGrid';

function Settings() {
	return (
		<Page name='settings'>
			<WelcomeMessage />
			<CoinGrid topSection />
			<ConfirmButton />
			<CoinGrid />
		</Page>
	);
}

export default Settings;
