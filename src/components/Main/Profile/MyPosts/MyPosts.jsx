import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
	
	let addPost = () => {
		let action = {type: 'ADD-POST'};
		props.dispatch(action);
	}
	
	let onPostChange = (e) => {
		let action = {type: 'UPDATE-NEW-POST-TEXT', newText: e.target.value};
		props.dispatch(action);
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
