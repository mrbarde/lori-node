import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as AuthReducers from '../modules/auth/store/reducers';
import {lnPush, lnRemove} from 'lori-bites';

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

var reducers = Object.assign({},
    AuthReducers,
    {lnPush, lnRemove}
);

reducers = combineReducers(reducers);

var store = createStoreWithMiddleware(reducers);

export default store;