import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Preloader} from '../../common/Preloader/Preloader.jsx';
import {withAuthRedirect} from '../../common/withAuthRedirect/withAuthRedirect.jsx';
import {Dialogs} from './Dialogs.jsx';
import {getDialogs, updateNewMessageText, sendMessage} from '../../../redux/dialogs-reducer.js';

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

export default withAuthRedirect(withRouter(connect(mapStateToProps, {getDialogs, updateNewMessageText,sendMessage})(DialogsContainer)));