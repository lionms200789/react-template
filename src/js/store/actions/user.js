import { GET_USER } from '../actionTypes'

export const getUser = val => {
    return {
        type: GET_USER,
        payload: val
    }
}