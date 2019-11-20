import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    login: loginReducer,
    user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunk));
export default store;