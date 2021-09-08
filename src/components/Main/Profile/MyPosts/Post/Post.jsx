import {NavLink} from 'react-router-dom';
import s from './Post.module.css';
import photoStopper from '../../../../../img/avaCircle.png';
import likesImage from '../../../../../img/heart.png';

export const Post = (props) => {
	return (
		<div className={s.post}>
			<div className={s.ava}>
				<NavLink to={`/profile/${props.userId}`}>
					<img src={props.photo ? props.photo : photoStopper} alt=''/>
				</NavLink>
			</div>
			<div className={s.content}>
				<div className={s.name}>
					{props.name}
				</div>
				<div className={s.date}>
					{props.date}
				</div>
				<div className={s.postText}>
					{props.message}
				</div>
				<div className={s.likes} onClick={()=> props.putLike(props.id)}>
					<img className={s.likesImage} src={likesImage} alt=''/>
					<div className={s.likesCount}>{props.likesCount}</div>
				</div>
			</div>
		</div>
	);
}
