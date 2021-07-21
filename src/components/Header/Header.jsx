import s from './Header.module.css';
import logo from '../../img/logo.png';

export const Header = () => {
  return (
	<div className={s.header}>
		<div className={s.logo}><img src={logo} alt="" /></div>
		<div  className={s.name}>VAITISHNIK</div>
		<button  className={s.button}>log in</button>
	</div>
  );
}

