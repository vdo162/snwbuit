import {profileReducer, addPost, deletePost} from './profile-reducer';

let state = {
	posts: [
		{
			id: 1, 
			userId: 2, 
			name: 'samurai dimych',
			photo: '', 
			message: 'Hi, how are you?',
			date: '7.08.2021 10:39',
			likesCount: 12,
			didPut: false
		},
		{
			id: 2, 
			userId: 18844, 
			name: 'Google',
			photo: '', 
			message: 'On his', 
			date: '8.08.2021 05:01',
			likesCount: 11,
			didPut: false
		},
		{
			id: 3, 
			userId: 15539, 
			name: 'CodingGuru',
			photo: '', 
			message: 'The young',
			date: '15.08.2021 14:37',
			likesCount: 1,
			didPut: false
		},
		{
			id: 4,  
			userId: 15539, 
			name: 'CodingGuru',
			photo: '', 
			message: 'Hearing', 
			date: '15.08.2021 22:55',
			likesCount: 22,
			didPut: false
		}
	]
};

test('length of posts should be incremented', () => {
	//1. test data
	let action = addPost(5, 'Dima', '', 'new my first post', '15/10/2021');
	//2. action
	let newState = profileReducer(state, action);
	//3.expection
	expect(newState.posts.length).toBe(5);
});

test('likesCount should be 0', () => {
	//1. test data
	let action = addPost(5, 'Dima', '', 'new my first post', '15/10/2021');
	//2. action
	let newState = profileReducer(state, action);
	//3.expection
	expect(newState.posts[4].likesCount).toBe(0);
});

test('message of new post should be correct', () => {
	//1. test data
	let action = addPost(5, 'Dima', '', 'New post', '15/10/2021');
	//2. action
	let newState = profileReducer(state, action);
	//3.expection
	expect(newState.posts[4].message).toBe('New post');
});

test('length of posts should be decremented', () => {
	//1. test data
	let action = deletePost(1);
	//2. action
	let newState = profileReducer(state, action);
	//3.expection
	expect(newState.posts.length).toBe(3);
});

test('length of posts should not be decremented if id is incorrect', () => {
	//1. test data
	let action = deletePost(1000);
	//2. action
	let newState = profileReducer(state, action);
	//3.expection
	expect(newState.posts.length).toBe(4);
});
