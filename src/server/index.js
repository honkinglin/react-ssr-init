import express from 'express';
import { render } from './utils.js';

const app = new express();
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(render(req));
});

const server = app.listen(3000);
