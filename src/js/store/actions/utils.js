import { SHOW_MENU } from '../actionTypes'

export const toggleMenu = val => {
    return {
        type: SHOW_MENU,
        payload: val
    }
}