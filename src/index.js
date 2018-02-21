import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import PlanetSearchReducer from './Reducer/PlanetSearchReducer';
import {applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)(PlanetSearchReducer);

//const store = createStoreWithMiddleware(PlanetSearchReducer);

ReactDOM.render(<Provider store = {createStoreWithMiddleware}>
	<App/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
