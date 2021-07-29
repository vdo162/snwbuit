import s from './User.module.css'
import ava from '../../../img/icon.jpg';

export const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{id: 0, foto: ava, followed: false, fullName: 'Dmitry', status: 'I am boss', location: {city:'Minsk', country: 'Belarus'}},
			{id: 1, foto: ava, followed: true, fullName: 'Sacha', status: 'I am boss too', location: {city:'Minsk', country: 'Belarus'}},
			{id: 2, foto: ava, followed: false, fullName: 'Kate', status: 'I am boss too', location: {city:'Minsk', country: 'Belarus'}}
		]);
	}
	
	let users = props.users.map(u => <User user={u} key={u.id} unfollow={props.unfollow} follow={props.follow}/>);
	return <div>
		<div>
			{users}
		</div>
		<button onClick={props.setUsers}>Yet</button>
	</div>;
}

export const User = (props) => {
	return <div className={s.User}>
		<div className={s.ava}>
			<img src={props.user.foto} alt='' className={s.img}/>
			{props.user.followed ? 
				<button onClick={() => props.unfollow(props.user.id)}>Unfollow</button> : 
				<button onClick={() => props.follow(props.user.id)}>Follow</button>}
			
		</div>
		<div className={s.info}>
			<div className={s.text}>Name: {props.user.fullName}</div>
			<div>Status: {props.user.status}</div>
			<div>Location: {props.user.location.city}, {props.user.location.country}</div>
		</div>
	</div>;
}