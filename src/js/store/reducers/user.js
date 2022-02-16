import { GET_USER } from '../actionTypes';

const initState = {
    isLoading: false,
    user: {}
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, ...action.payload }

        default:
            return state;
    }
};

export const userState = state => state.user;