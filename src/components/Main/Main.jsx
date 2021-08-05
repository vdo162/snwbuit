import s from './Main.module.css';
import Profile from './Profile/ProfileContainer.jsx';
import Dialogs from './Dialogs/DialogsContainer.js';
import Users from './Users/UsersContainer.js';
import Friends from './Friends/Friends.jsx';
import {Route, Switch} from 'react-router-dom';

export const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/dialogs' render={() => <Dialogs />}/>
		<Route path='/users' render={() => <Users />}/>
		<Route path='/friends' render={() => <Friends/>}/>
		<Switch>	
			<Route path='/profile/:id' component={() => <Profile />}/>
			<Route path='/profile' component={() => <Profile />}/>
		</Switch>
	</div>
  );
}
