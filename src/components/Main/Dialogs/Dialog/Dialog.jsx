import s from './Dialog.module.css';
import ava from '../../../../img/avaSquare.png';

const Message = (props) => {
	return (
		<div className={s.message + ' ' + (props.isOwnerAuth && s.messageAuth)}>
			<span className={s.text + ' ' + (props.isOwnerAuth && s.textAuth)}>
				{props.text} 
				<div className={s.date}>
					{props.date}
				</div>
			</span>
		</div>
	);
}

export const Dialog = (props) => {
	return (
		<div className={s.dialog}>
			<div className={s.friend}>
				<div className={s.ava}>
					<img src={props.dialog.ava ? props.dialog.ava : ava} alt='' />
				</div>
				<div className={s.name}>
					{props.dialog.name}
				</div>
				<div className={s.status}>
					{props.dialog.status}
				</div>
			</div>		
			
			<div className={s.messages}>
				{props.dialog.messages.map(m => 
					<Message text={m.messageText} 
						isOwnerAuth={m.isOwnerAuth} 
						date={m.date} 
						key={m.id}/>)}
			</div>
			
			<div className={s.messageCreater}>
				<textarea onChange={props.onNewMessageChange} 
					value={props.newMessageText} 
					className={s.textarea} 
					placeholder='Your message...'/>
				<button onClick={(e) => props.newMessageText && props.onSendMessageClick(e, props.dialog.id)} className={s.button}>
						>
				</button>
			</div>
		</div>
	);
}

