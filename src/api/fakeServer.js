import {usersAPI} from './api.js'
import * as randomTools from './randomTools.js'

export const get = (endpoint) => {
	switch(endpoint) {
		case 'dialogs':
			return usersAPI.getFriends(1, 100)
				.then(data => ({
					data: data.items.map(d => ({
						id: d.id, 
						name: d.name,
						ava: d.photos.small,
						status: randomTools.status(d.id),
						messages: randomTools.messages(d.id)
					}))
				}));
				
		case 'dialogs/{dialogId}':
			return new Promise(resolve => {
				setTimeout(() => {
					resolve({data: {answer: randomTools.messageText()}})
				}, Math.random() * 3000);
			});

		default:
			return 'no such endpoint';
	}
};

export const put = () => {
	return new Promise(resolve => resolve({data: {resultCode: 0}}));
};