
import _ from 'lodash';

export const CAR_ACTIONS = {
    CLIENT_INIT_DATA: 'CLIENT_INIT_DATA',
    SELECT_MODEL: 'SELECT_MODEL'
};


export const selectModel = modelId => ({
    type: CAR_ACTIONS.SELECT_MODEL,
    modelId: parseInt(modelId)
});

function parse(data){
    return typeof data === 'string' ? JSON.parse(data) : data;
}

export const clientInitData = landingData => {

    const makes = parse(landingData.makes);
    const models = parse(landingData.models);
    const cowReview = parse(landingData.carOfTheWeek);

    const cowModel = _.find(models, {id: cowReview.modelId});
    const cowMake = _.find(makes, {id: cowModel.makeId});

    const carOfTheWeek = {
        makeName: cowMake.name,
        makeId: cowMake.id,
        modelName: cowModel.name,
        ...cowMake,
        ...cowModel,
        ...cowReview,
    };

    const initialData = {
        carOfTheWeek,
        makes,
        models,
    };

    return {
        type: CAR_ACTIONS.CLIENT_INIT_DATA,
        initialData
    };
};

