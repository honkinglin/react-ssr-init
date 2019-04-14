import axios from 'axios';

const createInstance = (req) => axios.create({
    baseURL: 'https://newsapi.org',
    headers: {
        cookie: req.get('cookie') || '',
    },
    params: {
        apiKey: 'fa35a325ddfa4c4798102ebb76809bbb',
    },
});

export default createInstance;
