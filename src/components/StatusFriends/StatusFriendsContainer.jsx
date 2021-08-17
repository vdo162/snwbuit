import React from 'react'
import {connect} from 'react-redux';
import {getFriends, newSearchText} from '../../redux/friends-reducer.js';
import {StatusFriends} from './StatusFriends.jsx';

class StatusFriendsContainer extends React.Component{
	componentDidMount(){
		if(this.props.isAuth && this.props.friends === null) {
			this.props.getFriends();
		}
	};
	componentDidUpdate(){
		if(this.props.isAuth && this.props.friends === null) {
			this.props.getFriends();
		}
	};
	
	render () {
		if(!this.props.isAuth) {
			return null;
		}
		return <StatusFriends 
			friends={this.props.friends} 
			isFetching={this.props.isFetching} 
			searchText={this.props.searchText} 
			newSearchText={this.props.newSearchText} />;
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		friends: state.friendsPage.friends,
		isFetching: state.friendsPage.isFetching,
		searchText: state.friendsPage.searchText		
	};
}

export default connect(mapStateToProps, {getFriends, newSearchText})(StatusFriendsContainer);