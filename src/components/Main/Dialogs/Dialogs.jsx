import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem.jsx';
import {Message} from './Message/Message.jsx';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../../redux/dialogs-reducer.js';

export const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;
	let dialogdsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);	
	
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}
	
	let onNewMessageChange = (e) => {
		props.store.dispatch(updateNewMessageTextCreator(e.target.value));
	}
	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogdsElements}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
					<div><textarea onChange={onNewMessageChange} value={state.newMessageText} /></div>
					<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div>
	);
}
