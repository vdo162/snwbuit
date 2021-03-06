import {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

export const ProfileStatus = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	
	useEffect(() => {
		setStatus(props.status);
	}, [setStatus, props.status]);
	
	const activateEditMode = () => {
		if(props.authId === props.userId) {
			setEditMode(true);
		}
	}
	
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	
	const onStatusChange = (e) => {
		setStatus(e.target.value);
	}
	return (
		<>
			{!editMode && 
				<div className={s.status} 
					onDoubleClick={activateEditMode}>
					{props.status || 'No status'}
				</div>
			}
			{editMode && 
				<div className={s.status}>
					<input autoFocus={true} 
						onBlur={deactivateEditMode}  
						value={status} 
						onChange={onStatusChange}/>
				</div>
			}
		</>
	);
}