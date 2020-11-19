import React, { Component } from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE_API_KEY);
const MAX_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashboard',
			favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
			...this.savedSettings(),
			setPage: this.setPage,
			addCoin: this.addCoin,
			confirmFavorites: this.confirmFavorites,
			isInFavorites: this.isInFavorites,
			removeCoin: this.removeCoin,
			setFilteredCoins: this.setFilteredCoins
		};
	}

	addCoin = key => {
		let favorites = [...this.state.favorites];
		if (favorites.length < MAX_FAVORITES) {
			favorites.push(key);
			this.setState({ favorites });
		}
	};

	confirmFavorites = () => {
		this.setState(
			{
				firstVisit: false,
				page: 'dashboard'
			},
			() => {
				this.fetchPrices();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites
			})
		);
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	fetchPrices = async () => {
		if (this.state.firstVisit) {
			return;
		}
		let prices = await this.prices();
		prices = prices.filter(price => Object.keys(price).length);
		console.log('prices: ', prices);
		this.setState({ prices });
	};

	isInFavorites = key => _.includes(this.state.favorites, key);

	prices = async () => {
		let returnData = [];
		for (let i = 0, l = this.state.favorites.length; i < l; i++) {
			try {
				let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
				returnData.push(priceData);
			} catch (error) {
				console.warn('Fetch price error: ', error);
			}
		}
		return returnData;
	};

	removeCoin = key => {
		let favorites = [...this.state.favorites];
		this.setState({ favorites: _.pull(favorites, key) });
	};

	savedSettings() {
		let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
		if (!cryptoDashData) {
			return { page: 'settings', firstVisit: true };
		}
		let { favorites } = cryptoDashData;
		return { favorites };
	}

	setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

	setPage = page => this.setState({ page });

	componentDidMount() {
		this.fetchCoins();
		this.fetchPrices();
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
