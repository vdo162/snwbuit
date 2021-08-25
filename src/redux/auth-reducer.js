import {authAPI} from '../api/api.js';
import {profileAPI} from '../api/api.js';
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH_PROFILE = 'SET-AUTH-PROFILE';

let initialState = {
	userId: null,
    email: null,
    login: null,
	isAuth: false,
	profile: {
		photos: {
			small: null
		}
	}
};

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			};
		case SET_AUTH_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		default:
			return state;	
	};	
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setAuthProfile = (profile) => ({type: SET_AUTH_PROFILE, profile});

export const getAuthUserData = () => (dispatch) => {
		authAPI.me()
			.then(data => {
				if (data.resultCode === 0) {
					let {id, email, login} = data.data;
					dispatch(setAuthUserData(id, email, login, true));
					dispatch(getAuthProfile(id));	
				} 
			});
}
const getAuthProfile = (userId) => (dispatch) => {
		profileAPI.getProfile(userId)
			.then(data => {
				dispatch(setAuthProfile(data.data));
			});
}
export const login = (email, password, rememberMe, onErrorCallback) => (dispatch) => {
		authAPI.login(email, password, rememberMe)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(getAuthUserData());					
				} else if (data.resultCode === 10){
					console.log('!captcha!');
				} else {
					onErrorCallback({[FORM_ERROR]: data.messages[0]});
				} 
			});
}
export const logout = (onErrorCallback) => (dispatch) => {
		authAPI.logout()
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
					dispatch(setAuthProfile({photos: {small: null}}));					
				} else {
					console.log(data.messages[0]);
				} 
			});
}
