import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../container/Home/store';
import serverAxios from '../server/request';
import clientAxios from '../client/request';

const reducer = combineReducers({
    home: homeReducer,
});

// 当服务端获取ajax请求时候需要直接获取真实api地址，客户端渲染时候使用proxy地址
export function getStore(req) {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export function getClientStore() {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
