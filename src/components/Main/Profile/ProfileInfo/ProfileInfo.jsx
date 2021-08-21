import s from './ProfileInfo.module.css';
import {ProfileStatus} from './ProfileStatus.jsx';
import ava from '../../../../img/avaSquare.png';

export const ProfileInfo = (props) => {
	let foto = props.profile.photos.large ? props.profile.photos.large : props.profile.photos.small
	return (
		<div>
			<div>
				{/*<img src={foto ? foto : ava} alt=''/>*/}
				<ProfileStatus updateStatus={props.updateStatus} 
					status={props.status}
					authId={props.authId}
					userId={props.profile.userId}/>
			</div>
			
			<div className={s.descriptionBlock}>
				<div>
					<span className={s.title}>Full name:</span> {props.profile.fullName}
				</div>
				<div>
					<span className={s.title}>About me:</span> {props.profile.aboutMe}
				</div>
				<div>
					<span className={s.title}>Looking for a job:</span> {props.profile.lookingForAJob ? 'Yes' : 'No'}
				</div>
				<div>
					<span className={s.title}>Looking for a job description:</span> {props.profile.fullName}
				</div>
				<div>
					<span className={s.title}>Contacts:</span> {props.profile.contacts.twitter}
				</div>
			</div>
		</div>
	);
}
