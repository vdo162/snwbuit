import {Dialogs} from './Dialogs.jsx';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	};
}

const mapDispatchToProps = (dispatch) => { 
	return {
		updateNewMessageText: (text) => dispatch(updateNewMessageTextCreator(text)),
		sendMessage: () => dispatch(sendMessageCreator())
	};
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;