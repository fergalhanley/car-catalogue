
import React from 'react';
import {render} from 'enzyme';
import Details from '../src/components/Details.jsx';
import store from '../src/core/store';
import {selectModel} from '../src/actions/car-actions';

require('./lib/load-data-to-store');

describe('tests for Details component', () => {

	it('Details loads with props hydrating components', () => {

		const selectedModelId = 100;
		store.dispatch(selectModel(selectedModelId))
		const details = render( <Details store={store} params={{id: selectedModelId}}/> );

		expect(details.find('img')[0].attribs["src"])
			.toEqual('http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png');

		expect(details.find('p').text())
			.toEqual('Porsche 911 Carrera 4s - $297130');

	});

});