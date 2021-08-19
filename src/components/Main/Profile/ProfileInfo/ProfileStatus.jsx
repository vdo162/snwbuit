import React from 'react';
import s from './ProfileInfo.module.css';

export class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		statusValue: this.props.status
	};
	
	activateEditMode = () => {
		this.setState({
				editMode: true
		});
	}
	
	deactivateEditMode = () => {
		this.setState({
				editMode: false
		});
	}
	
	render() {
		return (
			<div className={s.status}>
				{!this.state.editMode && 
					<div className={s.status} 
						onDoubleClick={this.activateEditMode}>
						{this.state.statusValue}
					</div>
				}
				{this.state.editMode && 
					<div className={s.status}>
						<input autoFocus={true} 
							type='text' 
							defaultValue={this.state.statusValue} 
							onBlur={this.deactivateEditMode}/>
					</div>
				}
			</div>
		);
	}
}