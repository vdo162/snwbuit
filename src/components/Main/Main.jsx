import s from './Main.module.css';
import {Profile} from './Profile/Profile.jsx';
import {Dialogs} from './Dialogs/Dialogs.jsx';
import {Friends} from './Friends/Friends.jsx';
import {Route} from 'react-router-dom';

export const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
		<Route path='/dialogs' render={() => <Dialogs  dialogs={props.dialogs} messages={props.messages}/>}/>
		<Route path='/friends' render={() => <Friends/>}/>
	</div>
  );
}
