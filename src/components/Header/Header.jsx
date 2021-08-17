import s from './Header.module.css';
import logo from '../../img/logo.png';
import {NavLink} from 'react-router-dom';
import ava from '../../img/avaSquare.png';

export const Header = (props) => {
  return (
	<div className={s.header}>
		<div className={s.logo}>
			<img src={logo} alt="" />
		</div>
		<div  className={s.snwName}>
			VAITISHNIK
		</div>
		<div className={s.authBlock}>
			{!props.isAuth && 
				<NavLink to={'/login'} className={s.login}>
					Login
				</NavLink>}
			{props.login && 
				<div className={s.logout} onClick={() => {alert('Bye!')}}>
					<span className={s.userName}>
						{props.login}
					</span>
					<img src={props.ava ? props.ava : ava} className={s.ava} alt='' />		
				</div>}
		</div>
	</div>
  );
}

