import {useState} from 'react';
import {Form, Field} from 'react-final-form'
import s from './ProfileInfo.module.css';
import {ProfileStatus} from './ProfileStatus.jsx';
import fotoStopper from '../../../../img/avaCircleSquare.png';

const DescriptionBlock = (props) => {
	return(
		<div className={s.descriptionBlock}>
			<div className={s.descriptionTitle}>Description</div>
			<div className={s.descriptionName}>About me:</div>
			<div className={s.descriptionContent}>{props.profile.aboutMe || '-'}</div>
			<div className={s.descriptionName}>Looking for a job:</div>
			<div className={s.descriptionContent}>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
			<div className={s.descriptionName}>Looking for a job description:</div>
			<div className={s.descriptionContent}>{props.profile.lookingForAJobDescription}</div>
		
			<div className={s.descriptionTitle}>Contacts</div>
			
			<div className={s.descriptionName}>Facebook:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.facebook || '-'}</div>
			
			<div className={s.descriptionName}>Github:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.github || '-'}</div>
			
			<div className={s.descriptionName}>Instagram:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.instagram || '-'}</div>
			
			<div className={s.descriptionName}>MainLink:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.mainLink || '-'}</div>
			
			<div className={s.descriptionName}>Twitter:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.twitter || '-'}</div>
			
			<div className={s.descriptionName}>VK:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.vk || '-'}</div>
			
			<div className={s.descriptionName}>Youtube:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.youtube || '-'}</div>
			
			<div className={s.descriptionName}>Website:</div>
			<div className={s.descriptionContent}>{props.profile.contacts.website || '-'}</div>
		</div>
	);
}

const DescriptionForm = ({editMode, setEditMode, fullScreenMode, setFullScreenMode, foto, props}) => (
	<Form
		onSubmit={() => '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Here must have your hundlesubmit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1'}
		render={({handleSubmit}) => (
			<form onSubmit={handleSubmit}>	
				<DescriptionBlock {...props}/>
				<button type="submit" className={s.save + ' ' + (editMode && s.saveEditMode)}>Save</button>
			</form>
		)}
	/>
);

const PersonalCard = ({fullScreenMode, setFullScreenMode, editMode, foto, ...props}) => {
	const onPhotoSelected = (e) => {
		if(e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}
	return (
		<div className={s.personalCard}>
			<div className={s.fotoBlock}>
				<div className={s.foto + ' ' + (!editMode && fullScreenMode && s.fullScreen)} onClick={() => setFullScreenMode(!fullScreenMode)}>
					<img src={foto ? foto : fotoStopper} alt=''/>
				</div>
				<div className={s.fullScreenFoto + ' ' + (!editMode && fullScreenMode && s.fullScreen)} 
					onClick={() => setFullScreenMode(false)}>
					<img src={foto ? foto : fotoStopper} alt=''/>
				</div>
				{editMode && 
					<>
						<input 
							className={s.upload} 
							id='upload' 
							type='file' 
							onChange={onPhotoSelected}
						/>
						<label htmlFor="upload" className={s.uploadButton}>
							<div className={s.align}>Upload</div>
						</label>
					</>
				}
			</div>
			<div className={s.cardInfo + ' ' + (!editMode && fullScreenMode && s.fullScreen)}>
				<div className={s.fullName}>{props.profile.fullName}</div>
				<ProfileStatus 
					updateStatus={props.updateStatus} 
					status={props.status}
					authId={props.authId}
					userId={props.profile.userId}
				/>
			</div>
		</div>	
	);
}

const ToggleEditMode = ({editMode, setEditMode, authId, fullScreenMode, setFullScreenMode, profile: {userId}}) => {
	return (
		<>
			{(userId === authId)&& 
				<div className={s.editMode + ' ' + (fullScreenMode && s.editModeFull)} onClick={()=> !fullScreenMode && setEditMode(!editMode)}>
					<div>Enable edit mode</div>
					<div className={editMode ? s.toggle + ' ' + s.on : s.toggle}>
						<div className={editMode ? s.arm + ' ' + s.on : s.arm}></div>
					</div>
					{fullScreenMode && <div className={s.blockingToggle} onClick={() => setFullScreenMode(false)}></div>}
				</div>}
		</>
	);
}

export const ProfileInfo = (props) => {
	let [fullScreenMode, setFullScreenMode] = useState(false);
	let [editMode, setEditMode] = useState(false);
	
	let foto = props.profile.photos.large ? props.profile.photos.large : props.profile.photos.small;
	return (
		<div>
			<ToggleEditMode editMode={editMode} setEditMode={setEditMode} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode} {...props}/>	
			<PersonalCard foto={foto} fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode} editMode={editMode} {...props}/>
			<DescriptionForm 
				editMode={editMode} 
				setEditMode={setEditMode} 
				fullScreenMode={fullScreenMode} 
				setFullScreenMode={setFullScreenMode} 
				foto={foto}
				props={props}/>
		</div>
	);
}
