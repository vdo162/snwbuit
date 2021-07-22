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
  return (
	<div className={s.dialogs}>
		<div className={s.dialogsItems}>
			<DialogItem name='Dim' id='1' />
			<DialogItem name='Andr' id='2' />
			<DialogItem name='Svet' id='3' />
		</div>
		<div className={s.messages}>
			<Message message='Hi'/>
			<Message message='Hey'/>
			<Message message='Yo'/>
			<Message message='Buy'/>
		</div>
	</div>
  );
}
