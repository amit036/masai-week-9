import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
// import thunk from 'react-thunk'
import * as serviceWorker from './serviceWorker';
import CarReducer from './reducers/CarReducer';
// import BikeReducer from './reducers/BikeReducer';
// import ScootyReducer from './reducers/ScootyReducer';

// const masterReducer=combineReducers({
//     Car:CarReducer,
//     Bike:BikeReducer,
//     scooty:ScootyReducer
// })
const store=createStore(CarReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
