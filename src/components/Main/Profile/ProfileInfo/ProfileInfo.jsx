import {useState} from 'react';
import {Form, Field} from 'react-final-form'
import s from './ProfileInfo.module.css';
import {ProfileStatus} from './ProfileStatus.jsx';
import fotoStopper from '../../../../img/avaCircleSquare.png';

const Contact = ({nameKey, contact}) => {
	return (
		<>
			{contact && <>
					<div className={s.descriptionName}>{nameKey}:</div>
					<div className={s.descriptionContent}>{contact || '-'}</div>
				</>}
		</>
	);
}

const DescriptionBlock = (props) => {
	let isProperty = null;
	let contacts = [];
	for(let key in props.profile.contacts) {
		isProperty = isProperty || props.profile.contacts[key];
		contacts.push(<Contact nameKey={key} contact={props.profile.contacts[key]} key={key}/>);
	}
		
	return(
		<div className={s.descriptionBlock}>
			<div className={s.descriptionTitle}>Description</div>
			
			{props.profile.aboutMe && <>
				<div className={s.descriptionName}>About me:</div>
				<div className={s.descriptionContent}>{props.profile.aboutMe || '-'}</div>
			</>}
			
			
			<div className={s.descriptionName}>Looking for a job:</div>
			<div className={s.descriptionContent}>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
			
			
			{props.profile.lookingForAJobDescription && <>
				<div className={s.descriptionName}>Looking for a job description:</div>
				<div className={s.descriptionContent}>{props.profile.lookingForAJobDescription || '-'}</div>
			</>}
			
			<div className={s.descriptionTitle}>Contacts</div>
			{!isProperty && <div className={s.descriptionEmpty}>No contacts</div>}
			{contacts}
		</div>
	);
}

const DescriptionForm = ({editMode, setEditMode, fullScreenMode, setFullScreenMode, foto, props}) => {
	
	const saveDescriptionForm = async (data, formAPI, onErrorCallback) => {
		data.userId = props.profile.userId;
		const response = await props.sendProfile(data, onErrorCallback);
		if(response) setEditMode(false);
	}
	
	return <Form
		onSubmit={saveDescriptionForm}
		render={({handleSubmit, errors, submitError, submitErrors}) => (
			<form onSubmit={handleSubmit}>
				<div className={s.descriptionBlock}>
					<div className={s.descriptionTitle}>Description</div>

					<div className={s.descriptionName}>Full name:</div>
					<Field name='fullName' component='input' className={s.descriptionContent} defaultValue={props.profile.fullName}/>

					<div className={s.descriptionName}>About me:</div>
					<Field name='aboutMe' component='input' className={s.descriptionContent} defaultValue={props.profile.aboutMe}/>

					<div className={s.descriptionName}>Looking for a job:</div>
					<Field name='lookingForAJob' component='select' className={s.descriptionContent} defaultValue={props.profile.lookingForAJob ? true : false}>
						<option value={true}>Yes</option>
						<option value={false} >No</option>
					</Field>

					<div className={s.descriptionName}>Looking for a job description:</div>
					<Field name='lookingForAJobDescription' component='input' className={s.descriptionContent} defaultValue={props.profile.lookingForAJobDescription}/>

					<div className={s.descriptionTitle}>Contacts</div>

					<div className={s.descriptionName}>Facebook:</div>
					<Field name='contacts.facebook' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.facebook}/>

					<div className={s.descriptionName}>Github:</div>
					<Field name='github' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.github}/>

					<div className={s.descriptionName}>Instagram:</div>
					<Field name='contacts.instagram' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.instagram}/>

					<div className={s.descriptionName}>MainLink:</div>
					<Field name='contacts.mainLink' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.mainLink}/>

					<div className={s.descriptionName}>Twitter:</div>
					<Field name='contacts.twitter' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.twitter}/>

					<div className={s.descriptionName}>VK:</div>
					<Field name='contacts.vk' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.vk}/>

					<div className={s.descriptionName}>Youtube:</div>
					<Field name='contacts.youtube' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.youtube}/>

					<div className={s.descriptionName}>Website:</div>
					<Field name='contacts.website' component='input' className={s.descriptionContent} defaultValue={props.profile.contacts.website}/>
				</div>

				<button type="submit" className={s.save + ' ' + (editMode && s.saveEditMode)}>Save</button>
				{submitError &&
				<div className={s.error}>
					{submitError}
				</div>}
			</form>
		)}
	/>
};

const PersonalCard = ({fullScreenMode, setFullScreenMode, editMode, foto, ...props}) => {
	const onPhotoSelected = (e) => {
		if(e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	}
	return (
		<div className={s.personalCard}>
			<div className={s.fotoBlock}>
				<div 
					className={s.foto + ' ' + (!editMode && fullScreenMode && s.fullScreen)} 
					onClick={() => setFullScreenMode(!fullScreenMode)}>
					<img src={foto ? foto : fotoStopper} alt=''/>
				</div>
				<div 
					className={s.fullScreenFoto + ' ' + (!editMode && fullScreenMode && s.fullScreen)} 
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
			{editMode 
				? <DescriptionForm 
					editMode={editMode} 
					setEditMode={setEditMode} 
					fullScreenMode={fullScreenMode} 
					setFullScreenMode={setFullScreenMode} 
					foto={foto}
					props={props}/>
				: <DescriptionBlock {...props} />
			}
		</div>
	);
}
