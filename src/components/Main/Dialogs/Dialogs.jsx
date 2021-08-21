import {Preloader} from '../../common/Preloader/Preloader.jsx';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem.jsx';
import {Dialog} from './Dialog/Dialog.jsx';

const DialogsList = (props) => {
	return (
			<div>
				{(props.dialogsPage.dialogs === null || props.dialogsPage.dialogs.length === 0)
					? <div className={s.noDialogs}>No dialogs...</div>
					: props.dialogsPage.dialogs.map(d => 
					<DialogsItem ava={d.ava} name={d.name} id={d.id} lastMessage={d.messages[d.messages.length-1]} key={d.id}/>)}
			</div>
		);
}

export const Dialogs = (props) => {
	let onSendNewMessage = (newMessageText, dialogId) => {
		props.sendMessage(newMessageText, dialogId);
	};
	
	if (props.isFetching) {
		return <Preloader/>;
	} else if(!props.match.params.userId) {
		return <DialogsList {...props}/>;
	} else {
		let dialog = props.dialogsPage.dialogs.find(d => 
			+d.id === +props.match.params.userId);
		if(!dialog) return <div>No such dialogs :(</div>;
		return <Dialog 
			dialog={dialog}
			onSendNewMessage={onSendNewMessage} />;
	};	
}
