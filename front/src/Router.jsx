import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ChooseInfo from './components/ChooseInfo';
import Home from './components/Home';
import EventList from './components/EventList';
import ChooseInvit from './components/ChooseInvit';

function Router() {
	return (
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/ChooseInfo" component={ChooseInfo} />
						<Route path="/events" component={EventList} />
						<Route path="/invit" component={ChooseInvit} />
					</Switch>
					
			</BrowserRouter>
	);
}

export default Router;