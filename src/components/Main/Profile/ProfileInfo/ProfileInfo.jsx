import {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStatus} from './ProfileStatus.jsx';
import fotoStopper from '../../../../img/avaCircleSquare.png';

export const ProfileInfo = (props) => {
	let [fullScreenMode, setFullScreenMode] = useState(false);
	let [editMode, setEditMode] = useState(false);
	
	let foto = props.profile.photos.large ? props.profile.photos.large : props.profile.photos.small;
	return (
		<div>
			{(props.profile.userId === props.authId)&& 
				<div className={s.editMode} onClick={()=> setEditMode(!editMode)}>
					<div>Enable edit mode</div>
					<div className={editMode ? s.toggle + ' ' + s.on : s.toggle}>
						<div className={editMode ? s.arm + ' ' + s.on : s.arm}></div>
					</div>
				</div>}
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
							<input id='upload' className={s.upload} type='file'/>
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
		</div>
	);
}
