import {Form, Field } from "react-final-form";
import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const AddNewPostForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}
			render={({handleSubmit}) => (
				<form onSubmit={handleSubmit}>
					<div> 
						<Field name='newPostText' component='textarea'/>
					</div>
					<div>
						<button>Add post</button>
					</div>
				</form>
			)}
		/>
	);
}

export const MyPosts = (props) => {
	let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
	
	let onAddPost = ({newPostText}) => {
		props.addPost(newPostText);
	}
	
	return (
		<div className={s.postBlock}>
			<h3>My posts</h3>
			<AddNewPostForm onSubmit={onAddPost}/>
			<div  className={s.posts}>
				{postsElement}
			</div>
		</div>
	);
}
