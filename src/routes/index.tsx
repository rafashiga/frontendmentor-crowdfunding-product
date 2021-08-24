import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import Home from '../pages/Home';

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
