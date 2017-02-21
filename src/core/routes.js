import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import Search from '../components/Search.jsx';
import Details from '../components/Details.jsx';

export const ROUTES = {
    HOME: '/',
    SEARCH: '/search',
    DETAILS: '/make/model/:id',
};

const routes = (
    <Route path={ROUTES.HOME} component={App}>
        <IndexRoute component={Home}/>
        <Route path={ROUTES.SEARCH} component={Search}/>
        <Route path={ROUTES.DETAILS} component={Details}/>
    </Route>
);

export default routes;

export const SyncedRouter = store => {
    return (
        <Router history={syncHistoryWithStore(browserHistory, store)} routes={routes}/>
    );
};
