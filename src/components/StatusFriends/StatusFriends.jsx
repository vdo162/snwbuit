import React from 'react'
import {NavLink} from 'react-router-dom';
import {Preloader} from '../common/Preloader/Preloader.jsx';
import s from './StatusFriends.module.css';
import ava from '../../img/avaCircle.png';
import search from '../../img/search.png';

const StatusFriend = (props) => {
	let isOnline = props.friend.id % 2;
	return (
		<div className={s.statusItem}>
			<NavLink to={`/profile/${props.friend.id}`} className={s.statusAva}>
				<img src={props.friend.photos.small ? props.friend.photos.small : ava} alt=''/>
			</NavLink>
			<div className={s.statusName}>
				{props.friend.name}
			</div>
			<div className={s.status + ' '  + (isOnline ? s.online : s.offline)}>
				<div></div>
			</div>
		</div>
	);
}

export const StatusFriends = (props) => {
	let searchedFriends = props.friends;
	if (props.searchText) {
		searchedFriends = props.friends.filter(f => f.name.indexOf(props.searchText) !== -1);
	};
	return (
		<div className={s.statusFriends}>
			{props.isFetching && <Preloader/>}
			<div className={s.statusSearch}>
				<div className={s.statusSearchWrap}>
					<img src={search} className={s.statusSearchIcon} alt="" />
					<input 
						onChange={e => props.newSearchText(e.target.value)} 
						className={s.statusSearchInput} 
						placeholder='Search' 
						value={props.searchText}/>
				</div>
			</div>
			{!props.friends.length && <div className={s.noFriends}>No friends...</div>}
			<div className={s.statusItems}>
				{searchedFriends.map(f => {
					return <StatusFriend friend={f} key={f.id}/>
				})}
			</div>
		</div>
	)
}