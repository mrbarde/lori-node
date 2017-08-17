import * as types from './actionTypes';
import {CreateReducer} from 'lori-bites';

export const auth = CreateReducer(
    {
        isFetching: false,
        isAuthenticated: false,
        failed: false,
        message: false,
        creds: false
    }, 
    {
        [types.LOGIN_REQUEST]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGIN_SUCCESS]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGIN_FAILURE]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_REQUEST]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_SUCCESS]: (state, action) => {
            return Object.assign({}, state, action);
        },
        [types.LOGOUT_FAILURE]: (state, action) => {
            return Object.assign({}, state, action);
        }
    }
);