import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from '../container/Home/store/reducer';

const reducer = combineReducers({
    home: homeReducer,
});

export const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
};
