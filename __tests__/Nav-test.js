
import React from 'react';
import {render} from 'enzyme';
import Nav from '../src/components/Nav.jsx';
import {ROUTES} from '../src/core/routes';

describe('tests for Nav component', () => {

	it('Search button displays for home page', () => {
		const home = render( <Nav location={{pathname: ROUTES.HOME}}/> );
		expect(home.find('.link-button').text()).toEqual('Search');
	});

	it('Home button displays for search page', () => {
		const home = render( <Nav location={{pathname: ROUTES.SEARCH}}/> );
		expect(home.find('.link-button').text()).toEqual('Home');
	});

	it('Both buttons display for details page', () => {
		const home = render( <Nav location={{pathname: ROUTES.DETAILS}}/> );
		expect(home.find('.link-button').text()).toEqual('HomeSearch');
	});

});