import {usersAPI} from '../api/api.js';
import {getFriends} from './friends-reducer.js';

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USERS';
export const USERS_TOGGLE_IS_FETCHING = 'USERS-TOGGLE-IS-FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
	users: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true};
					}
					return u;
				})
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false};
					}
					return u;
				})
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users] 
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_TOTAL_COUNT_USERS:
			return {
				...state,
				totalUsersCount: action.count
			};
		case USERS_TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching 
					? [...state.followingInProgress, action.userId] 
					: state.followingInProgress.filter(id => id !== action.userId)
					
			};
		default:
			return state;		
	}

};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountUsers = (totalUsersCount) => ({type: SET_TOTAL_COUNT_USERS, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: USERS_TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (userId, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching});

export const requestUsers = (page, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(page));
	let data = await usersAPI.getUsers(page, pageSize);
	dispatch(setUsers(data.items));
	dispatch(setTotalCountUsers(data.totalCount));
	dispatch(toggleIsFetching(false));
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(userId, true));
	let data = await apiMethod(userId);
	if(data.resultCode === 0) {
		dispatch(actionCreator(userId));
		dispatch(getFriends());
	}
	dispatch(toggleFollowingProgress(userId, false));
}

export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
}
export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
}