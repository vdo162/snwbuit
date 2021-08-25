import React from 'react';
import {connect} from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth-reducer.js';
import {Header} from './Header.jsx';
			
class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}
	onLogout = () => {
		if(window.confirm('Are sure to want to logout?')) this.props.logout();
	}
	render() {
		return <Header {...this.props} onLogout={this.onLogout}/>;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	ava: state.auth.profile.photos.small
});
export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);