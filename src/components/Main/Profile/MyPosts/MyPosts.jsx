import {Form, Field} from "react-final-form";
import {composeValidators, requiredField, maxLenghtCreator} from "../../../../utils/validators/validators.js";
import s from './MyPosts.module.css';
import {Post} from './Post/Post.jsx';
import photoStopper from '../../../../img/avaCircle.png';

export const AddNewPostForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit}>
			{({handleSubmit, errors}) => (
					<form onSubmit={handleSubmit} className={s.form}>
						<div className={s.ava}>
							<img src={props.photo ? props.photo : photoStopper} alt=''/>
						</div>
						<div className={s.creator}>
							<Field 
								name='newPostText' 
								component='textarea' 
								placeholder='Your new post...' 
								className={s.textarea}
								validate={composeValidators(requiredField, maxLenghtCreator(30))}/>
							<button className={s.button} disabled={errors.newPostText}>
									>
							</button>
						</div>
					</form>
			)}
		</Form>		
	);
}

export const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post  
		id={p.id}
		userId={p.userId}
		name={p.name}
		photo={p.photo}
		message={p.message} 
		likesCount={p.likesCount}
		date={p.date}
		putLike={props.putLike}
		key={p.id}
	/>);	
		
	let onAddPost = ({newPostText}) => {
		let date = new Date();
		let formatDate = `${date.getDate()}.${(date.getMonth() >= 9) ? (date.getMonth()+1) : '0' + (date.getMonth()+1)}.${date.getFullYear()} ${date.getHours()+1}:${(date.getMinutes() >= 10) ? (date.getMinutes()) : '0' + (date.getMinutes())}`;
		props.addPost(props.auth.userId, props.auth.login, props.auth.authPhoto, newPostText, formatDate);
	} 
	
	return (
		<div className={s.posts}>
			<AddNewPostForm onSubmit={onAddPost} photo={props.auth.authPhoto}/>
			<div>
				{postsElements.reverse()}
			</div>
		</div>
	);
}
