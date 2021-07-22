import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem.jsx';
import {Message} from './Message/Message.jsx';

export const Dialogs = (props) => {
	let dialogs = [
		{id: 1, name: 'Dim'},
		{id: 2, name: 'Andr'},
		{id: 3, name: 'Kat'},
		{id: 4, name: 'Dim'},
		{id: 5, name: 'Andr'},
		{id: 6, name: 'Kat'}
	];
		
	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Hey'},
		{id: 4, message: 'Buy'}
	];
	
	let dialogdsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>);	
	
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
