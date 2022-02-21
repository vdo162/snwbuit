import {authAPI} from '../api/api.js';
import {profileAPI} from '../api/api.js';
import {FORM_ERROR} from "final-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_AUTH_PHOTO = 'auth/SET-AUTH-PHOTO';

let initialState = {
	userId: null,
    email: null,
    login: null,
	isAuth: false,
	authPhoto: null
};

export const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			};
		case SET_AUTH_PHOTO:
			return {
				...state,
				authPhoto: action.photo
			};
		default:
			return state;	
	};	
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const setAuthPhoto = (photo) => ({type: SET_AUTH_PHOTO, photo});

export const getAuthUserData = () => async(dispatch) => {
	let data = await authAPI.me();
	if (data.resultCode === 0) {
		let {id, email, login} = data.data;
		dispatch(setAuthUserData(id, email, login, true));
		dispatch(getAuthPhoto(id));	
	}
}
const getAuthPhoto = (userId) => (dispatch) => {
	profileAPI.getProfile(userId)
		.then(data => {
			dispatch(setAuthPhoto(data.data.photos.small));
		});
}
export const login = (email, password, rememberMe, onErrorCallback) => async (dispatch) => {
	let data = await authAPI.login(email, password, rememberMe);
	if (data.resultCode === 0) {
		dispatch(getAuthUserData());					
	} else {
		let noValidField = data.fieldsErrors[0] 
			? data.fieldsErrors[0].field
			: FORM_ERROR;
		let message = data.messages[0].length > 0 ? data.messages[0] : 'Some error';
		onErrorCallback({[noValidField]: message});
	} 
}
export const logout = () => async (dispatch) => {
	let data = await authAPI.logout();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
		dispatch(setAuthPhoto(null));		
	} else {
		console.log('auth-reduser:' + data.messages[0]);
	}
}
