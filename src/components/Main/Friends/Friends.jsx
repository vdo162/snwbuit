import s from './Friends.module.css';
import icon from '../../../img/icon.jpg';

export const Friends = () => {
  return (
	<div className={s.friends}>
		<div className={s.friendsItem}>
			<div className={s.friendsImg}>
				<img src={icon} alt="" />
			</div>
			<div className={s.friendsInfo}>
				<div>Petro Puchkov</div>
				<div><a href='#s'  className={s.friendsSubcribe}>Subcribe</a><a href='#s'  className={s.friendsMore}>More</a></div>
			</div>
		</div>
		<div className={s.friendsItem}>
			<div className={s.friendsImg}>
				<img src={icon} alt="" />
			</div>
			<div className={s.friendsInfo}>
				<div>
					Petro Puchkov
				</div>
				<div>
					<a href='#s' className={s.friendsSubcribe}>Subcribe</a>
					<a href='#s' className={s.friendsMore}>More</a>
				</div>
			</div>
		</div>
	</div>
  );
}
