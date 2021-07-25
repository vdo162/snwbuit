import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts.jsx';
import {ProfileInfo} from './ProfileInfo/ProfileInfo.jsx';

export const Profile = (props) => {
  return (
	<div className={s.profile}>
		<ProfileInfo/>
		<MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
	</div>
  );
}
