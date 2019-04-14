import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
import { renderRoutes } from 'react-router-config';

const store = getClientStore();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    { renderRoutes(routes) }
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
