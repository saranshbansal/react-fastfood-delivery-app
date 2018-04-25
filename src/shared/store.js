import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import DashboardReducer from '../modules/Dashboard/reducer';
import CartReducer from '../modules/Cart/reducer';

const rootReducer = combineReducers({
    DashboardReducer,
    CartReducer
});

const initialState = {};
const enhancers = [];
const middleware = [
    createLogger({ collapsed: true })
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

export default store;