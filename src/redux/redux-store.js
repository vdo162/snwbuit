import {createStore, combineReducers, applyMiddleware} from 'redux';
import {profileReducer} from './profile-reducer.js';
import {dialogsReducer} from './dialogs-reducer.js';
import {sidebarReducer} from './sidebar-reducer.js';
import {usersReducer} from './users-reducer.js';
import {authReducer} from './auth-reducer.js';
import {friendsReducer} from './friends-reducer.js';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	friendsPage: friendsReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;