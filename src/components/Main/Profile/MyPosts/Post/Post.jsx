import s from './Post.module.css';
import ava from '../../../../../img/avaCircle.png';

export const Post = (props) => {
  return (
	<div  className={s.item}>		
		<img src={ava} alt=''/>
			{props.message}
		<div>
			<span>like</span> {props.likesCount}
		</div>
	</div>
  );
}
