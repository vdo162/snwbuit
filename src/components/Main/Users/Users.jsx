import s from './User.module.css'
import ava from '../../../img/icon.jpg';
import * as axios from 'axios';

export const Users = (props) => {
	if (props.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response)=>{
				props.setUsers(response.data.items)
			});
	}
	return (
		<div>
			<div>
				{
					props.users.map(u => <User user={u} key={u.id} unfollow={props.unfollow} follow={props.follow}/>)}
			</div>
			<button onClick={props.setUsers}>Yet</button>
		</div>
	);
}

export const User = (props) => {
	return <div className={s.User}>
		<div className={s.ava}>
			<img src={props.user.photos.small ? props.user.photos.small : ava} alt='' className={s.img}/>
			{props.user.followed ? 
				<button onClick={() => props.unfollow(props.user.id)}>Unfollow</button> : 
				<button onClick={() => props.follow(props.user.id)}>Follow</button>}
			
		</div>
		<div className={s.info}>
			<div className={s.text}>Name: {props.user.name}</div>
			<div>Status: {props.user.status}</div>
			<div>Location: props.user.location.city, props.user.location.country</div>
		</div>
	</div>;
}