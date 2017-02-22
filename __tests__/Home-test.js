
import React from 'react';
import {render} from 'enzyme';
import Home from '../src/components/Home.jsx';
import store from '../src/core/store';

require('./lib/load-data-to-store');

describe('tests for Home component', () => {

	it('Hope page with car of the week displayed', () => {

		const home = render( <Home store={store}/> );

		expect(home.find('img')[0].attribs["src"])
			.toEqual('http://www.mazda.com.au/assets/cars/allnewmx5/overview/standard-feature-panel/overview-roadster-gt.jpg');

		expect(home.find('p').text())
			.toContain('MX-5 is a traditional two-seat sports');

	});

});