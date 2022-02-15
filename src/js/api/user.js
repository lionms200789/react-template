// 檔名可針對不同功能頁面命名

import { getUser } from '@base/store/actions/user';

export const fetchUser = () => {
    return dispatch => {
        dispatch(getUser({ isLoading: true }));
        return fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(response => {
                const user = response.results[0]
                return dispatch(getUser({ isLoading: false, user }))
            })
    }
};