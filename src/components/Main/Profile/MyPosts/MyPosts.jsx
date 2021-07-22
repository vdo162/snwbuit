import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const MyPosts = (props) => {
	let postData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: "It's my first post", likesCount: 11}
	];
	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<div>
				<div> 
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div  className={s.posts}>
				<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
				<Post message={postData[1].message} likesCount={postData[1].likesCount}/>
			</div>
		</div>
	);
}
