import s from './../Dialogs.module.css';
import ava from '../../..//../img/icon.jpg';
import {NavLink} from 'react-router-dom';


export const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<img src={ava} alt=''/>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}