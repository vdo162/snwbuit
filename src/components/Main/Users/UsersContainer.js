import React from 'react'
import {connect} from 'react-redux';
import {follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress} from '../../../redux/users-reducer.js';
import {Users} from './Users.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';
import {usersAPI} from '../../../api/api.js';

class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data)=>{
				this.props.setUsers(data.items);
				this.props.setTotalCountUsers(data.totalCount);
				this.props.toggleIsFetching(false);
			});
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then((data)=>{
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
			});
	};
	
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
					follow={this.props.follow} 
					toggleFollowingProgress={this.props.toggleFollowingProgress} 
					followingInProgress={this.props.followingInProgress}/>
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
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
		toggleFollowingProgress: state.usersPage.toggleFollowingProgress
	};
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setTotalCountUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress})(UsersContainer);