import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {unfollow, setCurrentPage, getFriends} from '../../../redux/friends-reducer.js';
import {Friends} from './Friends.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class FriendsContainer extends React.Component{
	componentDidMount(){
		if(!this.props.friends.length) {
			this.props.getFriends(this.props.currentPage, this.props.pageSize);
		}
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getFriends(pageNumber, this.props.pageSize);
	};
	
	render () {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Friends 
					onPageGanged={this.onPageGanged} 
					totalCount={this.props.totalFriendsCount} 
					pageSize={this.props.pageSize} 
					currentPage = {this.props.currentPage} 
					friends={this.props.friends} 
					unfollow={this.props.unfollow} 
					toggleFollowingProgress={this.props.toggleFollowingProgress} 
					followingInProgress={this.props.followingInProgress}/>
			</>
		)
	}
}

const FriendsContainerWithRedirect = (props) => {
	if(!props.isAuth) {
		return <Redirect to="/login"/>
	}
	return <FriendsContainer {...props}/>;
}


const mapStateToProps = (state) => {
	return {
		friends: state.friendsPage.friends,
		pageSize: state.friendsPage.pageSize,
		totalFriendsCount: state.friendsPage.totalFriendsCount,
		currentPage: state.friendsPage.currentPage,
		isFetching: state.friendsPage.isFetching,
		followingInProgress: state.friendsPage.followingInProgress,
		isAuth: state.auth.isAuth
	};
}

export default connect(mapStateToProps, {unfollow, setCurrentPage, getFriends})(FriendsContainerWithRedirect);