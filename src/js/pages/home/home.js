import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { utilsState } from '@base/store/reducers/utils';
import { toggleMenu } from '@base/store/actions/utils';

import { userState } from '@base/store/reducers/user';
import { fetchUser } from '@base/api/user';

/**
 * 首頁
 */
const HomePage = () => {
    const { showMenu } = useSelector(utilsState);
    const { isLoading, user } = useSelector(userState);
    const dispatch = useDispatch();
    // console.log('store -> utils state', showMenu);

    useEffect(() => {
        dispatch(toggleMenu(true));
        dispatch(fetchUser())
    }, [])

    return (
        <>
            <div>首頁</div>
            <div>isLoading: {isLoading ? 'Loading..' : 'Done !'}</div>
            <div>User Name: {user.name && user.name.last + user.name.first}</div>
        </>
    )
}

export default HomePage;