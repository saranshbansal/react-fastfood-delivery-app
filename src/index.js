import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './shared/store.js';
import Routes from './shared/routes.js';
import registerServiceWorker from './registerServiceWorker';
import './assets/app.css';
import './assets/cards.css';

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
