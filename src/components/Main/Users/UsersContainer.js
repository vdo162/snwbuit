import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, toggleIsFetching} from '../../../redux/users-reducer.js';
import {Users} from './Users.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component{
	componentDidMount(){
		this.setUsers(this.props.currentPage);
	}
	
	setUsers = (pageNumber) => {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
			withCredentials: true
		})
			.then((response)=>{
				this.props.setUsers(response.data.items);
				this.props.setTotalCountUsers(response.data.totalCount);
				this.props.toggleIsFetching(false);
			});
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.setUsers(pageNumber);
	}
	
	follow = (userId) => {
		axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
				withCredentials: true,
				headers: {
					"API-KEY": "5802d007-bc61-4f84-b4ed-13db98269f64"
				}
		})
			.then((response)=>{
				if(response.data.resultCode === 0) {
					this.props.follow(userId);
				}
			});	
	}
	unfollow = (userId) => {
		axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
				withCredentials: true,
				headers: {
					"API-KEY": "5802d007-bc61-4f84-b4ed-13db98269f64"
				}
		})
			.then((response)=>{
				if(response.data.resultCode === 0) {
					this.props.unfollow(userId);
				}
			});	
	}
	
	render () {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Users 
					onPageGanged={this.onPageGanged} 
					totalCount={this.props.totalUsersCount} 
					pageSize={this.props.pageSize} 
					currentPage = {this.props.currentPage} 
					users={this.props.users} 
					unfollow={this.unfollow} 
					follow={this.follow}/>
			</>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	};
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, toggleIsFetching})(UsersContainer);