import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Preloader} from '../../common/Preloader/Preloader.jsx';
import {withAuthRedirect} from '../../common/withAuthRedirect/withAuthRedirect.jsx';
import {unfollow, setCurrentPage, getFriends} from '../../../redux/friends-reducer.js';
import {Friends} from './Friends.jsx';

class FriendsContainer extends React.Component{
	componentDidMount(){
		if(this.props.isAuth && this.props.friends === null) {
			this.props.getFriends(this.props.currentPage, this.props.pageSize);
		}
	};
	componentDidUpdate(){
		if(this.props.isAuth && this.props.friends === null) {
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
				{this.props.isFetching && <Preloader/>}
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

export default compose(
	withAuthRedirect, 
	connect(mapStateToProps, {unfollow, setCurrentPage, getFriends})
)(FriendsContainer);