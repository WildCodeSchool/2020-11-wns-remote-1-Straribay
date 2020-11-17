import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChooseInfo from './components/ChooseDate';
import Home from './components/Home';

function Router() {
	return (
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/ChooseInfo" component={ChooseInfo} />
					</Switch>
			</BrowserRouter>
	);
}

export default Router;