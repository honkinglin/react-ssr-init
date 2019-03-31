const defaultState = {
    name: 'frank lin',
    newsList: [],
};

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
