import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');
cc.setApiKey(process.env.REACT_APP_CRYPTOCOMPARE_API_KEY);

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

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
			setCurrentFavorite: this.setCurrentFavorite,
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
		let currentFavorite = this.state.favorites[0];
		this.setState(
			{
				firstVisit: false,
				page: 'dashboard',
				currentFavorite,
				prices: null,
				historical: null
			},
			() => {
				this.fetchPrices();
				this.fetchHistorical();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites,
				currentFavorite
			})
		);
	};

	fetchCoins = async () => {
		let coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	fetchHistorical = async () => {
		if (this.state.firstVisit) {
			return;
		}
		let results = await this.historical();
		let historical = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, index) => [
					moment()
						.subtract({ months: TIME_UNITS - index })
						.valueOf(),
					ticker.USD
				])
			}
		];
		this.setState({ historical });
	};

	fetchPrices = async () => {
		if (this.state.firstVisit) {
			return;
		}
		let prices = await this.prices();
		prices = prices.filter(price => Object.keys(price).length);
		this.setState({ prices });
	};

	historical = () => {
		let promises = [];
		for (let units = TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					['USD'],
					moment().subtract({ months: units }).toDate()
				)
			);
		}
		return Promise.all(promises);
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
		let { favorites, currentFavorite } = cryptoDashData;
		return { favorites, currentFavorite };
	}

	setCurrentFavorite = sym => {
		this.setState(
			{ currentFavorite: sym, historical: null },
			this.fetchHistorical
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				...JSON.parse(localStorage.getItem('cryptoDash')),
				currentFavorite: sym
			})
		);
	};

	setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

	setPage = page => this.setState({ page });

	componentDidMount() {
		this.fetchCoins();
		this.fetchPrices();
		this.fetchHistorical();
	}

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
