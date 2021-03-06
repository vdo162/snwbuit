import {useEffect} from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Preloader} from '../../common/Preloader/Preloader.jsx';
import {withAuthRedirect} from '../../common/withAuthRedirect/withAuthRedirect.jsx';
import {Dialogs} from './Dialogs.jsx';
import {getDialogs, sendMessage} from '../../../redux/dialogs-reducer.js';

const DialogsContainer = (props) => {
	const isAuth = props.isAuth;
	const getDialogs = props.getDialogs;
	useEffect(() => {
		if(isAuth) {
			getDialogs();
		}
	}, [isAuth, getDialogs]);
	return (
		<>
			{props.isFetching && <Preloader/>}
			<Dialogs {...props} />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
		isFetching: state.dialogsPage.isFetching
	};
}

export default compose(
	withAuthRedirect, 
	connect(mapStateToProps, {getDialogs,sendMessage}), 
	withRouter
)(DialogsContainer);