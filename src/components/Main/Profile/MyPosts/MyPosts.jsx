import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const MyPosts = (props) => {
	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: "It's my first post", likesCount: 11},
		{id: 2, message: "Bla", likesCount: 1},
		{id: 2, message: "Data", likesCount: 22}
	];
	let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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
				{postsElement}
			</div>
		</div>
	);
}
