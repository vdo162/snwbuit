import {profileReducer} from './profile-reducer.js';
import {dialogsReducer} from './dialogs-reducer.js';
import {sidebarReducer} from './sidebar-reducer.js';

export let store = {
	_state: {
		profilePage:{
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12},
				{id: 2, message: "It's my first post", likesCount: 11},
				{id: 3, message: "Bla", likesCount: 1},
				{id: 4, message: "Data", likesCount: 22}
			] ,
			newPostText: 'New post'
		},
		dialogsPage: {
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
		},
		sidebar: {
			
		}
	},
	_callSubscriber () {
		console.log('State changed')
	},
	
	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		
		this._callSubscriber(this);
	}
}; 

window.store = store;