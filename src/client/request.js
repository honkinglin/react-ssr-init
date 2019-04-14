import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    params: {
        apiKey: 'fa35a325ddfa4c4798102ebb76809bbb',
    },
});

export default instance;
