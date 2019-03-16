import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from '../Filters';

class Main extends Component {
	render() {
		return (
			<main className="app__main">
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							<Filters />
						}
					/>
				</Switch>
			</main>
		);
	}
}

export default Main;
