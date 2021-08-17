import s from './DialogsItem.module.css';
import ava from '../../../../img/avaSquare.png';
import {NavLink} from 'react-router-dom';


export const DialogsItem = (props) => {
	return (
		<NavLink to={'/dialogs/' + props.id} className={s.dialogsItem}>
			<div className={s.dialogImg}>
				<img src={props.ava ? props.ava : ava} alt=''/>
			</div>
			<div className={s.dialogName}>
				{props.name}
			</div>
			<div className={s.dialogText}>
				<span className={s.owner}>{props.lastMessage.isOwnerAuth && 'You: '}</span> {props.lastMessage.messageText}
			</div>
			<div  className={s.dialogTime}>
				{props.lastMessage.data}
			</div>
		</NavLink>
	)
}