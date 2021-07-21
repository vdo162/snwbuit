import s from './Profile.module.css';
import ava from '../../../img/icon.jpg';
import {MyPosts} from './MyPosts/MyPosts.jsx';

export const Profile = (props) => {
  return (
	<div className={s.profile}>
		<div>
			<img src={ava} alt=''/>
		</div>
		<div>
			ava+ description
		</div>
		<MyPosts/>
	</div>
  );
}
