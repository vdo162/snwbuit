import React from 'react'
import {NavLink} from 'react-router-dom';
import {Paginator} from '../../common/Paginator/Paginator.jsx';
import s from './Friend.module.css'
import ava from '../../../img/avaSquare.png';

const Friend = (props) => {
	return <div className={s.friend}>
		<div className={s.ava}>
			<NavLink to={`/profile/${props.friend.id}`}>
				<img src={props.friend.photos.small ? props.friend.photos.small : ava} alt=''/>
			</NavLink>
		</div>
		<div className={s.info}>
			<div>
				<div className={s.name}>
					{props.friend.name}
				</div>
				<div>
					Status: {props.friend.status ? props.friend.status : 'No status'}
				</div>
			</div>
			<div>
				<button onClick={() => props.unfollow(props.friend.id)} disabled={props.isFollowing} className={s.followButton}>Unfollow</button>
				<NavLink to={`/profile/${props.friend.id}`} className={s.more}>
					More
				</NavLink>
			</div>
		</div>
	</div>;
}

export const Friends = (props) => {
	return (
		<div>
			{props.totalCount >= props.pageSize && <Paginator onPageGanged={props.onPageGanged} totalCount={props.totalCount} pageSize={props.pageSize} currentPage = {props.currentPage} />}
			<div>
				{(props.friends === null || !props.friends.length) 
					? <div className={s.noFriends}>No friends...</div>
					: props.friends.map(f => {
						return <Friend friend={f} key={f.id} unfollow={props.unfollow} isFollowing={props.followingInProgress.some(id => id === f.id)}/>
					})
				}
			</div>
		</div>
	);
}