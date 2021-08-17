import {answers} from './answers.js'

export const messageText = () => {
	return answers[Math.ceil(Math.random()*(answers.length-1))];
};

export const status = (id) => {
	let date = new Date();
	let month = date.getMonth()+1;
	let day = date.getDate();
	let hours = Math.floor(Math.random()*date.getHours());
	let minutes = Math.round(Math.random()*60);
	 
	let status = id%2 
		? 'online' : 
		`was online on ${day}.${month > 9 ? month : '0' + month} at ${hours}:${minutes > 9 ? minutes : '0' + minutes}`;
  
	return status;
}

export const messages = (id) => {
	const getMessagesTime = (count, isOnline) => {
		let date = new Date();
		let timeOfMinutes = date.getHours() * 60 + date.getMinutes();
		let messagesTime = [];
		for (let i = 0; i < count; i++) {
			messagesTime[i] = Math.random() * timeOfMinutes;
		}
		messagesTime = messagesTime.sort((a, b) => a-b);
		
		let month = date.getMonth()+1;
		let day = date.getDate()-1;
		let dateForOffline = isOnline ? '' : `${day}.${month > 9 ? month : '0' + month} at `
		
		
		return messagesTime.map(t => {
			let hours = Math.floor(t / 60);
			let minutes = Math.floor(t % 60);
			return  `${dateForOffline}${hours}:${(minutes > 9) ? minutes : '0' + minutes}`;
		}); 
	}
	
	let messages = [];
	let countMessage = Math.ceil(Math.random()*5);
	let randomOwner = Math.random() > 0.5;
	let messagesTime = getMessagesTime(countMessage, (id % 2) > 0);
	 
	for (let i = 0; i < countMessage; i++) {
		messages[i] = {id: i, messageText: messageText(), isOwnerAuth: randomOwner, date: messagesTime[i]};
		randomOwner = !randomOwner;
	};
	return messages;
};