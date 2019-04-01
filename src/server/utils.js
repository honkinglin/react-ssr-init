import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../routes';
import { getStore } from '../store';

export const render = (req) => {
    const store = getStore();

    const matchRoutes = [];
    // TODO
    // 根据路由的路径，给store里面添加数据
    Routes.some(route => {
        // use `matchPath` here
        const match = matchPath(req.path, route);
        // if (match) matchRoutes.push(route.loadData(match));
        if (match) matchRoutes.push(route);
        // return match;
    });

    console.log(matchRoutes);

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <React.Fragment>
                    {
                        Routes.map(route => (<Route {...route} />))
                    }
                </React.Fragment>
            </StaticRouter>
        </Provider>
    ));

    return `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="./app.js"></script>
            </body>
        </html>
    `;
}
