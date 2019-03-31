import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';

export default (
    <div>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
    </div>
)
