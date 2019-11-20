import {FETCH_LIST} from '../actions/userConstants';

export default function loginReducer(state = {
    payload: []
  }, action) {
    switch (action.type) {
      case FETCH_LIST:
        return {
            ...state,
            payload: action.payload
        }
      default:
        return state;
   }
}