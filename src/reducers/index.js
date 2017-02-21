import { combineReducers } from 'redux'
import carReducer from './car-reducer';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers({
    car: carReducer,
    routing: routerReducer,
});

export default reducers;
