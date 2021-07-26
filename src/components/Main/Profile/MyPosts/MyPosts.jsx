import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer.js';

export const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
	
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}
	
	let onPostChange = (e) => {
		props.dispatch(updateNewPostTextActionCreator(e.target.value));
	}
	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<div>
				<div> 
					<textarea onChange={onPostChange} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div  className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}
