import s from './ProfileInfo.module.css';
import ava from '../../../../img/icon.jpg';

export const ProfileInfo = (props) => {
  return (
	<div>
		<div>
			<img src={ava} alt=''/>
		</div>
		<div className={s.descriptionBlock}>
			ava+ description
		</div>
	</div>
  );
}
