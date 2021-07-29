import s from './Users.module.css'
import ava from '../../../img/icon.jpg';

export const Users = (props) => {
	return <div className={s.Users}>
		<div className={s.info}>
			<img src={ava} alt='' className={s.img}/>
			<div className={s.text}>Name Name</div>
		</div>
		<div className={s.info}>
			<div>info info</div>
			<div>info info</div>
			<div>info info</div>
		</div>
	</div>;
}