import {usersAPI} from '../api/api.js';

export const UNFOLLOW = 'UNFOLLOW';
export const SET_FRIENDS = 'SET-FRIENDS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_COUNT_FRIENDS = 'SET-TOTAL-COUNT-FRIENDS';
export const FRIENDS_TOGGLE_IS_FETCHING = 'FRIENDS-TOGGLE-IS-FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';
export const NEW_SEARCH_TEXT = 'NEW-SEARCH-TEXT';

const initialState = {
	friends: null,
	pageSize: 100,
	totalFriendsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
	searchText: ''
};

export const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UNFOLLOW:
			return {
				...state,
				friends: state.friends.filter(f => f.id === action.friendId ? false : true)
			};
		case SET_FRIENDS:
			return {
				...state,
				friends: [...action.friends] 
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_TOTAL_COUNT_FRIENDS:
			return {
				...state,
				totalFriendsCount: action.count
			};
		case FRIENDS_TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching 
					? [...state.followingInProgress, action.friendId] 
					: state.followingInProgress.filter(id => id !== action.friendId)
					
			};
		case NEW_SEARCH_TEXT:
			return {
				...state,
				searchText: action.text	
			};
		default:
			return state;		
	}

};

export const unfollowSuccess = (friendId) => ({type: UNFOLLOW, friendId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountFriends = (totalFriendsCount) => ({type: SET_TOTAL_COUNT_FRIENDS, count: totalFriendsCount});
export const toggleIsFetching = (isFetching) => ({type: FRIENDS_TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (friendId, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, friendId, isFetching});
export const newSearchText = (text) => ({type: NEW_SEARCH_TEXT, text});

export const getFriends = (currentPage = 1, pageSize = 100) => (dispatch) => {
		dispatch(toggleIsFetching(true));
		usersAPI.getFriends(currentPage, pageSize)
			.then((data)=>{
				dispatch(setFriends(data.items));
				dispatch(setTotalCountFriends(data.totalCount));
				dispatch(toggleIsFetching(false));
			});
}
export const unfollow = (friendId) => (dispatch) => {
		dispatch(toggleFollowingProgress(friendId, true));
		usersAPI.unfollow(friendId)
			.then((data)=>{
				if(data.resultCode === 0) {
					dispatch(unfollowSuccess(friendId));
				}
				dispatch(toggleFollowingProgress(friendId, false));
			});
}