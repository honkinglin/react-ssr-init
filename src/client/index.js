import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';

const store = getClientStore();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    {
                        routes.map(route => (<Route {...route} />))
                    }
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
