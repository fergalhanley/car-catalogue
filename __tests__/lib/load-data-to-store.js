import store from '../../src/core/store';
import {clientInitData} from '../../src/actions/car-actions';

const landingData = {
	makes: require('../../public/data/makes.json'),
	models: require('../../public/data/models.json'),
	carOfTheWeek: require('../../public/data/carOfTheWeek.json'),
};

store.dispatch(clientInitData(landingData));