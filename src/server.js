import express from 'express';
import compression from 'compression';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import {fetchLandingData, getLandingData} from './core/landing-data';
import routes from './core/routes';
import Index from './components/Index.jsx';
import store from './core/store';
import { Provider } from 'react-redux';
import {clientInitData} from './actions/car-actions';

const ONE_YEAR = 31536000;

const server = express();
server.use(compression());
server.use(express.static('public', {maxAge: ONE_YEAR}));

global.navigator = {userAgent: 'all'};

fetchLandingData();

server.get('*', (req, res) => {

    match({routes, location: req.url}, (err, redirect, renderProps) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        }
        else if(renderProps){

            const landingData = getLandingData();
            store.dispatch(clientInitData(landingData));

            const html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            const appHtml = ReactDOMServer.renderToStaticMarkup(
                <Index landingData={landingData} html={html} js={CLIENT_JS_PATH}/>
            );
            res.send(`<!DOCTYPE html> ${appHtml}`);
        }
    });
});

server.listen(LISTEN_PORT, () => {
    console.log('Listening on port ', LISTEN_PORT);
});
