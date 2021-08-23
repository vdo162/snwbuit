import {Form, Field } from "react-final-form";
import {composeValidators, requiredField, maxLenghtCreator} from "../../../../utils/validators/validators.js";
import {Textarea} from '../../../common/FormsControls/FormsControls.js';
import s from './Dialog.module.css';
import ava from '../../../../img/avaSquare.png';

const AddMessageForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}>
			{({handleSubmit}) => {
				return (
					<form onSubmit={handleSubmit} className={s.messageCreater}>
						<Field 
							component={Textarea}  
							name='newMessageText'
							className={s.textarea} 
							placeholder='Your message...'
							validate={composeValidators(requiredField, maxLenghtCreator(50))}
						/>
						<button className={s.button}>
							>
						</button>
					</form>
				);
			}}
		</Form>
	);
}

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
			
			<AddMessageForm onSubmit={({newMessageText}) => props.onSendNewMessage(newMessageText, props.dialog.id)}/>
			
		</div>
	);
}

