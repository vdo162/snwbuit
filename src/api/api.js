import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "5802d007-bc61-4f84-b4ed-13db98269f64"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10){
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	}
};
