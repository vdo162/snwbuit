import {Form, Field} from "react-final-form";
import {composeValidators, requiredField, maxLenghtCreator} from "../../../../utils/validators/validators.js";
import {Textarea} from '../../../common/FormsControls/FormsControls.js';
import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';

export const AddNewPostForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}>
			{({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<div> 
							<Field 
								name='newPostText' 
								component={Textarea} 
								placeholder="Enter your post" 
								validate={composeValidators(requiredField, maxLenghtCreator(30))}/>
						</div>
						<div>
							<button>Add post</button>
						</div>
					</form>
			)}
		</Form>		
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
