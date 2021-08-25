import React from 'react'
import {connect} from 'react-redux';
import {follow, unfollow, setCurrentPage, getUsers} from '../../../redux/users-reducer.js';
import {Users} from './Users.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
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
		followingInProgress: state.usersPage.followingInProgress
	};
}

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers})(UsersContainer);