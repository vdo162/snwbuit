import React from 'react';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer.js';
import {Header} from './Header.jsx';
			
class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}
	render() {
		return <Header {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	ava: state.auth.profile.photos.small
});
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);