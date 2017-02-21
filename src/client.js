
require('isomorphic-fetch');
import { Provider } from 'react-redux';
import React from 'react';
import {render} from 'react-dom';
import {SyncedRouter} from './core/routes';
import store from './core/store';
import {clientInitData} from './actions/car-actions';

store.dispatch(clientInitData(window.LANDING_DATA));

render(<Provider store={store}>
            <SyncedRouter {...store} />
       </Provider>, document.getElementById('root'));
