const SEND_MESSAGE = 'SEND-MESSAGE'; 
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'; 

let initialState = {
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Hey'},
		{id: 4, message: 'Buy'}
	],
	newMessageText: 'New message',
	
	dialogs: [
		{id: 1, name: 'Dim'},
		{id: 2, name: 'Andr'},
		{id: 3, name: 'Kat'},
		{id: 4, name: 'Dim'},
		{id: 5, name: 'Andr'},
		{id: 6, name: 'Kat'}
	]
};

export const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					{id: 5, message: state.newMessageText}
				],
				newMessageText: ''
			};
		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			};
		default:
			return state;	
	};		
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE}); 
export const updateNewMessageTextCreator = (newText) => 
({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText});