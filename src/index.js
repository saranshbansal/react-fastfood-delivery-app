import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/app.css';
import './assets/cards.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './shared/routes.js';
import store from './shared/store.js';

window._app_container = document.getElementById('root');

//  wrap whole app in Provider so every component has access to the store
render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="fluidContainer">
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>,
    window._app_container
);
registerServiceWorker();
