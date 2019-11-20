import {FETCH_LIST, USERS_LIST} from './userConstants';

export function getList(){
    return {
        type: FETCH_LIST,
        payload: USERS_LIST
    }
}