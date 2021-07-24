import {rerenderEntireTree} from '../render.js';

export let state = {
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
		
		dialogs: [
			{id: 1, name: 'Dim'},
			{id: 2, name: 'Andr'},
			{id: 3, name: 'Kat'},
			{id: 4, name: 'Dim'},
			{id: 5, name: 'Andr'},
			{id: 6, name: 'Kat'}
		]
	}
}; 

window.state = state;

export let addPost = () => {
	let newPost = {
		id: 5, 
		message: state.profilePage.newPostText, 
		likesCount: 0
	};
	
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}