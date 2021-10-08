import React from 'react'
import {connect} from 'react-redux';
import {follow, unfollow, requestUsers} from '../../../redux/users-reducer.js';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../../redux/users-selectors.js';
import {Users} from './Users.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component{
	componentDidMount(){
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	};
	
	onPageGanged = (pageNumber) => {
		this.props.requestUsers(pageNumber, this.props.pageSize);
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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	};
}

export default connect(mapStateToProps, {follow, unfollow, requestUsers})(UsersContainer);