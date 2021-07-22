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
  
	let dialogs = [
		{id: 1, name: 'Dim'},
		{id: 2, name: 'Andr'},
		{id: 3, name: 'Kat'},
		{id: 1, name: 'Dim'},
		{id: 2, name: 'Andr'},
		{id: 3, name: 'Kat'}
	];
		
	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Yo'},
		{id: 3, message: 'Hey'},
		{id: 4, message: 'Buy'}
	];
	let dialogdsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
	let messagesElements = messages.map(m => <Message message={m.message}/>);	
	
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
