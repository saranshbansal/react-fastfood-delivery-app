import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import MenuReducer from '../modules/Menu/reducer';
import OrderReducer from '../modules/Order/reducer';

const rootReducer = combineReducers({
    MenuReducer,
    OrderReducer
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