import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Preloader} from '../../common/Preloader/Preloader.jsx';
import {withAuthRedirect} from '../../common/withAuthRedirect/withAuthRedirect.jsx';
import {getUserProfile} from '../../../redux/profile-reducer.js';
import {Profile} from './Profile.jsx';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			if (this.props.authId) {
				userId = this.props.authId;
			}else {
				userId = 2;
			}
		} 
		this.props.getUserProfile(userId);
	}
	componentDidUpdate() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			if (this.props.authId) {
				userId = this.props.authId;
			}else {
				userId = 2;
			}
		}
		if(Number(userId) !== this.props.profile.userId) {
			this.props.getUserProfile(userId);
		}
	}
	render() {
		if(this.props.isFetching){
			return <Preloader/>;
		}  else {
			return <Profile {...this.props}/>;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching,
		isAuth: state.auth.isAuth,
		authId: state.auth.userId
	};
};
export default compose (
	withAuthRedirect, 
	connect(mapStateToProps, {getUserProfile}), 
	withRouter
)(ProfileContainer);