import {Redirect} from 'react-router-dom';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem.jsx';
import {Message} from './Message/Message.jsx';

export const Dialogs = (props) => {
	let state = props.dialogsPage;
	let dialogdsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);	
	
	let onSendMessageClick = () => {
		props.sendMessage();
	}
	
	let onNewMessageChange = (e) => {
		props.updateNewMessageText(e.target.value);
	}
	if(!props.isAuth) {
		return <Redirect to="/login"/>
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
