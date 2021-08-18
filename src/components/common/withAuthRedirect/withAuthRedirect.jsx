import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const withAuthRedirect = (Component) => {
	const RedirectComponent = (props) => {
		if(!props.isAuth) {
			return <Redirect to="/login"/>
		}
		return <Component {...props}/>;
	}
	
	return connect((state) => ({isAuth: state.auth.isAuth}))(RedirectComponent);
}