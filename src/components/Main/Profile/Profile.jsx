import s from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer.jsx';
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx';

export const Profile = (props) => {
  return (
	<div className={s.profile}>
		<ProfileInfo profile={props.profile} />
		<MyPostsContainer />
	</div>
  );
};