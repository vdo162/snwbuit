import {profileAPI} from '../api/api.js';
import {FORM_ERROR} from "final-form";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'; 
const SET_STATUS = 'SET-STATUS'; 
const SET_IS_FETCHING = 'SET-IS-FETCHING'; 
const PUT_LIKE = 'PUT-LIKE'; 
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
	posts: [
		{
			id: 1, 
			userId: 2, 
			name: 'samurai dimych',
			photo: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=10', 
			message: 'Hi, how are you?',
			date: '7.08.2021 10:39',
			likesCount: 12,
			didPut: false
		},
		{
			id: 2, 
			userId: 18844, 
			name: 'Google',
			photo: 'https://social-network.samuraijs.com/activecontent/images/users/18844/user.jpg?v=10', 
			message: 'On his birthday, his parents gave little Willie a bicycle and proudly watched his debut. On the first lap, Willie shouted: "Look, Mom, I`m going without hands."On the second lap, he said: "Look, Mom, I`m going without legs."For the third time: "Look, Mom, I`m eating without teeth"!',
			date: '8.08.2021 05:01',
			likesCount: 11,
			didPut: false
		},
		{
			id: 3, 
			userId: 15539, 
			name: 'CodingGuru',
			photo: 'https://social-network.samuraijs.com/activecontent/images/users/15539/user.jpg?v=10', 
			message: 'The young husband, who agreed with his wife that they needed a vacuum cleaner, was very upset when his wife bought a super vacuum cleaner instead of the standard model."But, dear," his wife explained, " it will not cost more! All we have to do is pay a little longer."',
			date: '15.08.2021 14:37',
			likesCount: 1,
			didPut: false
		},
		{
			id: 4,  
			userId: 15539, 
			name: 'CodingGuru',
			photo: 'https://social-network.samuraijs.com/activecontent/images/users/15539/user.jpg?v=10', 
			message: 'Hearing the doorbell, the owner of the house hurried to open the front door and found an old friend and a large dog next to him. "Come in! Come in"!- he greeted the guest joyfully. The friend entered the house and sat down, while the dog chased the owner`s cat, knocked over a table lamp and several vases, eventually settling in the best chair. When the guest was about to leave, the host said with sarcasm in his voice: "Try not to forget your dog!" "A dog? I don`t have any dog," the guest replied. "I thought it was your dog."',
			date: '15.08.2021 22:55',
			likesCount: 22,
			didPut: false
		}
	] ,
	profile: {
		userId: null,
		photo: null
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
						id: state.posts.length+1, 
						userId: action.userId, 
						name: action.name,
						photo: action.photo, 
						message: action.newPostText,
						date: action.date,
						likesCount: 0,
						didPut: false
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
		case PUT_LIKE:
			let posts = [...state.posts];
			return {
				...state,
				posts: posts.map(p => {
					if(p.id === action.id) {
						if(p.didPut) {
							return {
								...p,
								likesCount: p.likesCount - 1,
								didPut: false
							};
						} else {
							return {
								...p,
								likesCount: p.likesCount + 1,
								didPut: true
							};
						}
					}
					return p;
				})
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			};
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photos
				}
			}			
		default:
			return state;	
	};	
};

export const addPost = (userId, name, photo, newPostText, date) => ({type: ADD_POST, userId, name, photo, newPostText, date}); 
export const deletePost = (postId) => ({type: DELETE_POST, postId}); 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const putLike = (id) => ({type: PUT_LIKE, id});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
	dispatch(setIsFetching(true));
	let response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
	dispatch(setIsFetching(false));
}
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
	let data = await profileAPI.updateStatus(status);
	if(data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}
export const savePhoto = (file) => async (dispatch) => {
	const data = await profileAPI.savePhoto(file);
	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos));
	}
}

export const sendProfile = (profile, onErrorCallback) => async (dispatch) => {
	const data = await profileAPI.sendProfile(profile);
	if (data.resultCode === 0) {
		dispatch(getUserProfile(profile.userId));
		return true;
	} else {
		let noValidField = data.fieldsErrors[0]
			? data.fieldsErrors[0].field
			: FORM_ERROR;
		let message = data.messages[0].length > 0 ? data.messages[0] : 'Some error';
		onErrorCallback({[noValidField]: message});
	}
}