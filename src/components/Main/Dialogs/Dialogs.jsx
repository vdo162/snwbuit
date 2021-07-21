import s from './Dialogs.module.css';
import ava from '../../../img/icon.jpg';

{/*<img src={ava} alt=''/>*/}

export const Dialogs = (props) => {
  return (
	<div className={s.dialogs}>
		<div className={s.dialogsItems}>
			<div className={s.dialog}>
				name
			</div>
			<div className={s.dialog + ' ' + s.active}>
				name
			</div>
			<div className={s.dialog}>
				name
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
