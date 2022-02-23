import * as fakeInstance from './fakeServer.js';
import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "e89f08f3-597c-4f38-8919-81ee276a697e"
	}
});

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
			.then(response => response.data);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha})
			.then(response => response.data);
	},
	logout() {
		return instance.delete(`auth/login`)
			.then(response => response.data);
	}
};

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
			.then(response => response.data);
	}
};

export const usersAPI = {
	getUsers(currentPage, pageSize){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	
	follow(userId){
		return instance.post(`follow/${userId}`)
			.then(response => response.data);
	},
	
	unfollow(userId){
		return instance.delete(`follow/${userId}`)
			.then(response => response.data);
	},
	
	getFriends(currentPage, pageSize){
		return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=true`)
			.then(response => response.data);
	}
};

export const profileAPI = {
	getProfile(userId){
		return instance.get(`profile/${userId}`);
	},
	
	getStatus(userId){
		return instance.get(`profile/status/${userId}`);
	},
	
	updateStatus(status){
		return instance.put(`profile/status`, {status: status})
			.then(response => response.data);
	},
	
	savePhoto(photoFile){
		const formData = new FormData();
		formData.append('image', photoFile);
		
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(response => response.data);
	},
	
	sendProfile(profile) {
		return instance.put(`profile`, profile)
			.then(response => response.data);
	}
};

export const dialogsAPI = {
	getDialogs() {
		return fakeInstance.get(`dialogs`)
			.then(response => response.data);
	},
	
	getAnswer(dialogId) {
		return fakeInstance.get(`dialogs/{dialogId}`)
			.then(response => response.data);
	},
	
	sendMessage(messageText, dialogId) {
		return fakeInstance.put(`dialogs/{dialogId}`, {messageText})
			.then(response => response.data);
	}
};