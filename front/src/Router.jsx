import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Home from './components/Home';
=======
import ChooseInfo from './components/ChooseInfo';
import Home from './components/Home';
import EventList from './components/EventList';
import ChooseInvit from './components/ChooseInvit';
import EventDetail from './components/EventDetail';
>>>>>>> 4f7a763d6d4239f14238089cd713889b397ae7e7

function Router() {
	return (
			<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
<<<<<<< HEAD
					</Switch>
=======
						<Route path="/ChooseInfo" component={ChooseInfo} />
						<Route path="/events" component={EventList} />
						<Route path="/Invit" component={ChooseInvit} />
						<Route path="/Details" component={EventDetail} />
					</Switch>
					
>>>>>>> 4f7a763d6d4239f14238089cd713889b397ae7e7
			</BrowserRouter>
	);
}

export default Router;