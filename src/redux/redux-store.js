import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile-reducer.js';
import {dialogsReducer} from './dialogs-reducer.js';
import {sidebarReducer} from './sidebar-reducer.js';
import {usersReducer} from './users-reducer.js';
import {authReducer} from './auth-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
});

export let store = createStore(reducers);

window.store = store;