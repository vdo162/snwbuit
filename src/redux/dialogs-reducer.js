import {dialogsAPI} from '../api/api.js'

const SET_DIALOGS = 'SET-DIALOGS'; 
const ADD_MESSAGE = 'ADD-MESSAGE'; 
const ADD_ANSWER = 'ADD-ANSWER'; 
export const DIALOGS_TOGGLE_IS_FETCHING = 'DIALOGS-TOGGLE-IS-FETCHING';

let initialState = {
	dialogs: null,
	isFetching: true
};

export const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_DIALOGS:
			return {
				...state,
				dialogs: action.dialogs
			};
		case ADD_MESSAGE:
			return {
				...state,
				dialogs: state.dialogs.map(d => {
					if (d.id === action.dialogId) {
						let newId = d.messages[d.messages.length - 1].id + 1;
						const date = new Date();
						const [hour, minutes] = [date.getHours(), date.getMinutes()];
						let time = `${hour}:${minutes > 9 ? minutes : '0' + minutes}`;
						return {...d,
							messages: [
								...d.messages,
								{id: newId, messageText: action.messageText, isOwnerAuth: true, date: time}
							]
						};
					}
					return d;
				})
			};
		case ADD_ANSWER:
			return {
				...state,
				dialogs: state.dialogs.map(d => {
					if (d.id === action.dialogId) {
						let newId = d.messages[d.messages.length - 1].id + 1;
						const date = new Date();
						const [hour, minutes] = [date.getHours(), date.getMinutes()];
						let time = `${hour}:${minutes > 9 ? minutes : '0' + minutes}`;
						return {...d,
							messages: [
								...d.messages,
								{id: newId, messageText: action.answer, isOwnerAuth: false, date: time}
							]
						};
					}
					return d;
				})
			};
		case DIALOGS_TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		default:
			return state;	
	};		
};

export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs});
export const addMessage = (messageText, dialogId) => ({type: ADD_MESSAGE, messageText, dialogId}); 
export const addAnswer = (dialogId, answer) => ({type: ADD_ANSWER, dialogId, answer}); 
export const toggleIsFetching = (isFetching) => ({type: DIALOGS_TOGGLE_IS_FETCHING, isFetching});

export const getDialogs = () => (dispatch) => {
	dispatch(toggleIsFetching(true));
	dialogsAPI.getDialogs()
		.then(dialogs => {
			dispatch(setDialogs(dialogs));
			dispatch(toggleIsFetching(false));
		});
};
export const sendMessage = (messageText, dialogId) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	dialogsAPI.sendMessage(messageText, dialogId)
		.then(data => {
			if(data.resultCode === 0){
				dispatch(addMessage(messageText, dialogId));
				dispatch(toggleIsFetching(false));
				dispatch(getAnswer(dialogId));
			}
		});	
};
const getAnswer = (dialogId) => (dispatch) => {
	dialogsAPI.getAnswer(dialogId)
		.then(data => {
			dispatch(addAnswer(dialogId, data.answer));
		});
}