import s from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer.jsx';
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx';

export const Profile = (props) => {
  return (
	<div className={s.profile}>
		<ProfileInfo {...props}/>
		<MyPostsContainer/>
	</div>
  );
};