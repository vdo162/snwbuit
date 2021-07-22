import s from './Dialogs.module.css';
import ava from '../../../img/icon.jpg';
import {NavLink} from 'react-router-dom';

{/*<img src={ava} alt=''/>*/}
const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>
			{props.message}
		</div>
	)
}

export const Dialogs = (props) => {
  
	let dialogData = [
		{id: 1, name: 'Dim'},
		{id: 2, name: 'Andr'},
		{id: 3, name: 'Andr'}
	];
	
	let messagesData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Hey'},
		{id: 4, message: 'Buy'}
	];
	
	 return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogData[0].name} id={dialogData[0].id} />
				<DialogItem name={dialogData[1].name} id={dialogData[1].id} />
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message} />
			</div>
		</div>
	 );
}
