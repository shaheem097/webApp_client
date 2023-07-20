import {createStore,combineReducers,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userLoginReducer, userUpdateReducer,adminUsersFetchReducer } from './reducers/userReducer';
import {adminLoginReducer} from './reducers/adminReducers';


const reducer =combineReducers({
    //this will contain our reducers
    userLogin:userLoginReducer,
    userUpdate:userUpdateReducer,
    adminLogin: adminLoginReducer,
    usersGet: adminUsersFetchReducer,
})

const initialsate={};

const middleware=[thunk];

const store =createStore(
    reducer,
    initialsate,
composeWithDevTools(applyMiddleware(...middleware)));

export default store;