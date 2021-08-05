import React from 'react';
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUserProfile, setIsFetching} from '../../../redux/profile-reducer.js';
import {Profile} from './Profile.jsx';
import {Preloader} from '../../common/Preloader/Preloader.jsx';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.id ? this.props.match.params.id : 2;
		if(Number(userId) !== this.props.profile.userId) {
			this.props.setIsFetching(true);
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
				.then(response =>{
					this.props.setUserProfile(response.data);
					this.props.setIsFetching(false);
				});
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

const ProfileContainerWithRouter = withRouter(ProfileContainer);

const mapStateToProps = (state) => ({
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching,
	});
export default connect(mapStateToProps, {setIsFetching, setUserProfile})(ProfileContainerWithRouter);