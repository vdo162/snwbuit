import {profileAPI} from '../api/api.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'; 
const SET_STATUS = 'SET-STATUS'; 
const SET_IS_FETCHING = 'SET-IS-FETCHING'; 

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: "It's my first post", likesCount: 11},
		{id: 3, message: "Bla", likesCount: 1},
		{id: 4, message: "Data", likesCount: 22}
	] ,
	profile: {
		userId: null
	},
	isFetching: true,
	status: ''
};

export const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 5, 
						message: action.newPostText, 
						likesCount: 0
					}
				]
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status
			};
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		default:
			return state;	
	};	
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText}); 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const getUserProfile = (userId) => (dispatch) => {
		dispatch(setIsFetching(true));
		profileAPI.getProfile(userId)
			.then(response =>{
				dispatch(setUserProfile(response.data));
				dispatch(setIsFetching(false));
			});
}
export const getStatus = (userId) => (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response =>{
				dispatch(setStatus(response.data));
			});
}
export const updateStatus = (status) => (dispatch) => {
		profileAPI.updateStatus(status)
			.then(data => {
				if(data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
}