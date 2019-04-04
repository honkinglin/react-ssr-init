import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newsapi.org',
});

export default instance;
