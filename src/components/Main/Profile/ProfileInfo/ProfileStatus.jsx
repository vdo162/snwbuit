import React from 'react';
import s from './ProfileInfo.module.css';

export class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};
	
	componentDidUpdate(prevProps) {
		if(this.props.status !== prevProps.status) {
			this.setState({
				status: this.props.status
			});
		}
	}
	
	activateEditMode = () => {
		if(this.props.authId === this.props.userId) {
			this.setState({
				editMode: true
			});
		}
		
	}
	
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status);
	}
	
	onStatusChange = (e) => {
		this.setState({
			status: e.target.value
		});
	}
	
	render() {
		return (
			<div className={s.status}>
				{!this.state.editMode && 
					<div className={s.status} 
						onDoubleClick={this.activateEditMode}>
						{this.props.status || 'No status'}
					</div>
				}
				{this.state.editMode && 
					<div className={s.status}>
						<input autoFocus={true} 
							onBlur={this.deactivateEditMode}  
							value={this.state.status} 
							onChange={this.onStatusChange}/>
					</div>
				}
			</div>
		);
	}
}