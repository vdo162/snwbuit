import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
	<div className={s.navbar}>
		<NavLink to='/profile' className={s.item} activeClassName={s.itemActive}>Profile</NavLink>
		<NavLink to='/dialogs' className={s.item} activeClassName={s.itemActive}>Messages</NavLink>
		<NavLink to='/users' className={s.item} activeClassName={s.itemActive}>Users</NavLink>
		<NavLink to='/friends' className={s.item} activeClassName={s.itemActive}>Friends</NavLink>
	</div>
  );
}
