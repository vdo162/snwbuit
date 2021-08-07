import s from './StatusFriends.module.css';
import ava from '../../img/avaCircle.png';
import search from '../../img/search.png';

const StatusFriends = () => {
  return (
	<div className={s.statusFriends}>
		<div className={s.statusSearch}>
			<div className={s.statusSearchWrap}>
				<img src={search} className={s.statusSearchIcon} alt="" />
				<input className={s.statusSearchInput} placeholder='Search'/>
			</div>
		</div>
		<div className={s.statusItems}>
			<div className={s.statusItem}>
				<div className={s.statusAva}><img src={ava} alt="" /></div>
				<div className={s.statusName}>
					Name
				</div>
				<div className={s.status + ' '  + s.online}>
					<div></div>
				</div>
			</div>
			<div className={s.statusItem}>
				<div className={s.statusAva}><img src={ava} alt="" /></div>
				<div className={s.statusName}>
					Name
				</div>
				<div className={s.status + ' '  + s.offline}>
					<div></div>
				</div>
			</div>
		</div>
	</div>	
  );
}
export default StatusFriends;