import express from 'express';
import { render } from './utils.js';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import { getStore } from '../store';

const app = new express();
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = getStore();

    // 根据路由的路径，给store里面添加数据
    const matchedRoutes = matchRoutes(routes, req.path);

    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(item.route.loadData(store));
        }
    });

    Promise.all(promises).then(() => {
        res.send(render(store, routes, res));
    });
});

const server = app.listen(3000);
