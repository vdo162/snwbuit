import {createStore, combineReducers} from 'redux';
import {profileReducer} from './profile-reducer.js';
import {dialogsReducer} from './dialogs-reducer.js';
import {sidebarReducer} from './sidebar-reducer.js';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer
});

export let store = createStore(reducers);

window.store = store;