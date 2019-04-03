import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../container/Home/store';

const reducer = combineReducers({
    home: homeReducer,
});

export function getStore() {
    return createStore(reducer, applyMiddleware(thunk));
};

export function getClientStore() {
    const defaultState = window.isSecureContext.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk));
}
