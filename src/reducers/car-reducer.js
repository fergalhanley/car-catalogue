import {CAR_ACTIONS} from '../actions/car-actions';
import _ from 'lodash';

const initialState = {
    makes: [],
    models: [],
    carOfTheWeek: {},
    selectedModel: {}
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAR_ACTIONS.CLIENT_INIT_DATA :
            return {
                ...state,
                ...action.initialData,
            };
        case CAR_ACTIONS.SELECT_MODEL:
            const model = _.find(state.models, {id: action.modelId});
            const makeName = _.find(state.makes, {id: model.makeId}).name;
            const selectedModel = {
                ...model,
                makeName
            };
            return {
                ...state,
                selectedModel
            };
        default:
            return state;
    }
};


export default carReducer;