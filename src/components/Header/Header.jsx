import s from './Header.module.css';
import logo from '../../img/logo.png';
import {NavLink} from 'react-router-dom';

export const Header = (props) => {
  return (
	<div className={s.header}>
		<div className={s.logo}><img src={logo} alt="" /></div>
		<div  className={s.name}>VAITISHNIK</div>
		<NavLink to={'/login'}  className={s.loginButton}>{props.login}{props.isAuth ? ' - Logout' : 'Login'}</NavLink>
	</div>
  );
}

