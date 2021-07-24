import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
	let post = React.createRef();
	let addPost = () => {
		alert(post.current.value);
	}
	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<div>
				<div> 
					<textarea ref={post}></textarea>
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
