import { CHANGE_HOME_LIST } from './constants';

const changeList = (list) => ({ type: CHANGE_HOME_LIST, list });

export const getHomeList = () => {
    // 当服务端获取ajax请求时候需要直接获取真实api地址，客户端渲染时候使用proxy地址
    return (dispatch, getState, axiosInstance) => (
        axiosInstance.get(`/v2/top-headlines?sources=techcrunch`)
            .then(res => {
                const list = res.data.articles;
                dispatch(changeList(list));
            })
    );
}
