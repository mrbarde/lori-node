import config from '../config/app';
import * as types from './actionTypes';
        
// login request action
const requestLogin = (creds) =>{
	return {
		type: types.LOGIN_REQUEST,
		creds
	};
}
// receive login action
const receiveLogin = (token) =>{
	return {
		type: types.LOGIN_SUCCESS,
		token
	};
}
// login error action
const loginError = (message) =>{
	return {
		type: types.LOGIN_FAILURE,
		message
	};
}
// logout request action
const requestLogout = () =>{
	return {
		type: types.LOGOUT_REQUEST
	};
}
// receive logout action
const receiveLogout = () =>{
	return {
		type: types.LOGOUT_SUCCESS
	};
}
// logout error action
const logoutError = (message) =>{
	return {
		type: types.LOGOUT_FAILURE,
		message
	};
}

// log user in
export const login = (creds) => {
	return dispatch => {}
}

// log user out
export const logout = () => {
	return dispatch => {}
}