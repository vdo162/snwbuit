import s from './Dialogs.module.css';
import ava from '../../../img/icon.jpg';
import {NavLink} from 'react-router-dom';

{/*<img src={ava} alt=''/>*/}

export const Dialogs = (props) => {
  return (
	<div className={s.dialogs}>
		<div className={s.dialogsItems}>
			<div className={s.dialog}>
				<NavLink to='/dialogs/1'>Dim</NavLink>
			</div>
			<div className={s.dialog + ' ' + s.active}>
				<NavLink to='/dialogs/2'>And</NavLink>
			</div>
			<div className={s.dialog}>
				<NavLink to='/dialogs/3'>Sv</NavLink>
			</div>
		</div>
		<div className={s.messages}>
			<div className={s.message}>
				Hi
			</div>
			<div className={s.message}>
				Who are you?
			</div>
			<div className={s.message}>
				Yo
			</div>
		</div>
	</div>
  );
}
