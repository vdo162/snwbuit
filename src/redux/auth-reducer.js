import {authAPI} from '../api/api.js';
import {usersAPI} from '../api/api.js';

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
				...action.data,
				isAuth: true
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

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setAuthProfile = (profile) => ({type: SET_AUTH_PROFILE, profile});

export const getAuthUserData = () => (dispatch) => {
		authAPI.me()
			.then(data => {
				if (data.resultCode === 0) {
					let {id, email, login} = data.data;
					dispatch(setAuthUserData(id, email, login));
					dispatch(getAuthProfile(id));	
				}
			});
}
const getAuthProfile = (userId) => (dispatch) => {
		usersAPI.getProfile(userId)
			.then(data => {
				dispatch(setAuthProfile(data.data));
			});
}
