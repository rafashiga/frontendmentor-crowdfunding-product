import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Navbar, Footer } from '../components';

import Home from '../pages/Home';

const Routes = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
