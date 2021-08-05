const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; 
const SET_USER_PROFILE = 'SET-USER-PROFILE'; 
const SET_IS_FETCHING = 'SET-IS-FETCHING'; 

let initialState = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: "It's my first post", likesCount: 11},
		{id: 3, message: "Bla", likesCount: 1},
		{id: 4, message: "Data", likesCount: 22}
	] ,
	newPostText: 'New post',
	profile: {
		userId: null
	},
	isFetching: true
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
						message: state.newPostText, 
						likesCount: 0
					}
				],
				newPostText: ''
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
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

export const addPostActionCreator = () => ({type: ADD_POST}); 
export const updateNewPostTextActionCreator = (newText) => 
({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});