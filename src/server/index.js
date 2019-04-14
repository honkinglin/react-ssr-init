import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils.js';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { getStore } from '../store';

const app = new express();
app.use(express.static('public'));

app.use('/v2', proxy('http://newsapi.org', {
    proxyReqPathResolver: (req) => {
        return `/v2${req.url}`;
    }
}));

app.get('*', (req, res) => {
    const store = getStore(req);

    // 根据路由的路径，给store里面添加数据
    const matchedRoutes = matchRoutes(routes, req.path);

    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            // 需要保证最外层的 Promise.all.then 可以触发需要额外包装一层promise
            const promise = new Promise((resolve, reject) => {
                item.route.loadData(store).then(resolve).catch(resolve);
            });
            promises.push(promise);
        }
    });

    Promise.all(promises).then(() => {
        const context = { css: [] };
        const html = render(store, routes, req, context);
        if (context.NOT_FOUND) res.status(404);
        // 当 react-router-config 触发 redirect 操作时会给 staticContext 塞入{action: 'REPLACE'...}
        if (context.action === 'REPLACE') res.redirect(301, context.url);
        res.send(html);
    });
});

const server = app.listen(3000);
