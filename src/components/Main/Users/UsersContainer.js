import React from 'react'
import {connect} from 'react-redux';
import * as axios from 'axios';
import {followAC, unfollowAC, setUsersAC, setTotalCountUsersAC, setCurrentPageAC, toggleIsFetchingAC} from '../../../redux/users-reducer.js';
import {Users} from './Users.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component{
	componentDidMount(){
		this.setUsers(this.props.currentPage);
	}
	
	setUsers = (pageNumber) => {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
					unfollow={this.props.unfollow} 
					follow={this.props.follow}/>
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

const mapDispatchToProps = (dispatch) => { 
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
		setTotalCountUsers: (totalCount) => dispatch(setTotalCountUsersAC(totalCount)),
		toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);