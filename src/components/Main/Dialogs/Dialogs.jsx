import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem.jsx';
import {Message} from './Message/Message.jsx';

export const Dialogs = (props) => {
	
	let dialogdsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);	
	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogdsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}
