import s from './Main.module.css';
import Profile from './Profile/Profile.jsx';
import Dialogs from './Dialogs/DialogsContainer.js';
import Users from './Users/UsersContainer.js';
import Friends from './Friends/Friends.jsx';
import {Route} from 'react-router-dom';

export const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/profile' render={() => <Profile />}/>
		<Route path='/dialogs' render={() => <Dialogs />}/>
		<Route path='/users' render={() => <Users />}/>
		<Route path='/friends' render={() => <Friends/>}/>
	</div>
  );
}
