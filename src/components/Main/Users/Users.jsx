import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './User.module.css'
import {Paginator} from '../../common/Paginator/Paginator.jsx';
import ava from '../../../img/avaSquare.png';

const User = (props) => {
	return <div className={s.user}>
		<div className={s.ava}>
			<NavLink to={`/profile/${props.user.id}`}>
				<img src={props.user.photos.small ? props.user.photos.small : ava} alt=''/>
			</NavLink>
		</div>
		<div className={s.info}>
			<div>
				<div className={s.name}>
					{props.user.name}
				</div>
				<div>
					Status: {props.user.status ? props.user.status : 'No status'}
				</div>
			</div>
			<div>
				{props.user.followed ? 
				<button onClick={() => props.unfollow(props.user.id)} disabled={props.isFollowing} className={s.followButton}>Unfollow</button> : 
				<button onClick={() => props.follow(props.user.id)} disabled={props.isFollowing} className={s.followButton}>Follow</button>}
				<NavLink to={`/profile/${props.user.id}`} className={s.more}>
					More
				</NavLink>
			</div>
		</div>
	</div>;
}

export const Users = (props) => {
	return (
		<div>
			<Paginator onPageGanged={props.onPageGanged} totalCount={props.totalCount} pageSize={props.pageSize} currentPage = {props.currentPage} />
			<div>
				{props.users.map(u => {
					return <User user={u} key={u.id} unfollow={props.unfollow} follow={props.follow} isFollowing={props.followingInProgress.some(id => id === u.id)}/>
				})}
			</div>
		</div>
	);
}