
import React from 'react';
import {render, mount} from 'enzyme';
import Search from '../src/components/Search.jsx';
import store from '../src/core/store';

require('./lib/load-data-to-store');

describe('tests for Search component', () => {

	it('Combo box has makes and models listed', () => {
		const search = render( <Search store={store}/> );
		expect(search.find('#makes_select').text()).toEqual('PorscheNissanBMWAudiMazda');
		expect(search.find('#models_select').text()).toEqual('911 Carrera 4sCayenne GTSPanamera 4S');
	});

	it('Selecting make update models list', () => {
		const search = mount( <Search store={store}/> );
		search.find('#makes_select').simulate('change', {target: { value : 20}});
		expect(search.find('#models_select').text()).toEqual('LeafGT-R');
	});

});