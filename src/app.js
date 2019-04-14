import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';

const App = (props) => {
    return (
        <React.Fragment>
            <Header staticContext={props.staticContext} />
            { renderRoutes(props.route.routes) }
        </React.Fragment>
    )
}

export default App;
