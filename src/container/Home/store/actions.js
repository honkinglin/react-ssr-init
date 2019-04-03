import axios from 'axios';
import { CHANGE_HOME_LIST } from './constants';

const changeList = (list) => ({ type: CHANGE_HOME_LIST, list });

const apiKey = 'fa35a325ddfa4c4798102ebb76809bbb';

export const getHomeList = () => {
    return (dispatch) => (
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
            .then(res => {
                const list = res.data.articles;
                dispatch(changeList(list));
            })
    );
}
