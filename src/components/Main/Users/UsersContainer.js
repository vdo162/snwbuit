import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios';
import {followAC, unfollowAC, setUsersAC, setTotalCountUsersAC, setCurrentPageAC} from '../../../redux/users-reducer.js';
import {Users} from './Users.jsx'

class UsersContainer extends React.Component{
	componentDidMount(){
		this.setUsers(this.props.currentPage);
	}
	
	setUsers = (pageNumber) => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response)=>{
				this.props.setUsers(response.data.items);
				this.props.setTotalCountUsers(response.data.totalCount);
			});
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.setUsers(pageNumber);
	}
	
	render () {
		return <Users 
			onPageGanged={this.onPageGanged} 
			totalCount={this.props.totalUsersCount} 
			pageSize={this.props.pageSize} 
			currentPage = {this.props.currentPage} 
			users={this.props.users} 
			unfollow={this.props.unfollow} 
			follow={this.props.follow}/>
	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	};
}

const mapDispatchToProps = (dispatch) => { 
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
		setTotalCountUsers: (totalCount) => dispatch(setTotalCountUsersAC(totalCount))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);