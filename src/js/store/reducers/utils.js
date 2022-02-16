import { SHOW_MENU } from '../actionTypes';

const initState = {
    showMenu: false
}

export const utilsReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return { ...state, showMenu: action.payload }

        default:
            return state;
    }
};

export const utilsState = state => state.utils;