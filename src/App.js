import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PlanetSearchContainer from './Container/PlanetSearchContainer';
import LoginContainer from './Container/LoginContainer';


const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/login' component={LoginContainer}/>
   			<Route path='/planet' component={PlanetSearchContainer}/>
   		</Switch>
	</BrowserRouter>
    )

export default App;
