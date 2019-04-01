import { CHANGE_HOME_LIST } from './constants';

const defaultState = {
    name: 'frank lin',
    newsList: [],
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_HOME_LIST:
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state;
    }
};
