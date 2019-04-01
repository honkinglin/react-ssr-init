import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../routes';
import { Provider } from 'react-redux';
import { getStore } from '../store';

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                <React.Fragment>
                    {
                        Routes.map(route => (<Route {...route} />))
                    }
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
