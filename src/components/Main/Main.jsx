import s from './Main.module.css';
import Profile from './Profile/ProfileContainer.jsx';
import Dialogs from './Dialogs/DialogsContainer.js';
import Users from './Users/UsersContainer.jsx';
import Friends from './Friends/FriendsContainer.jsx';
import LoginPage from './Login/Login.jsx';
import {Route} from 'react-router-dom';

const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/dialogs/:userId?' render={() => <Dialogs />}/>
		<Route path='/users' render={() => <Users />}/>
		<Route path='/friends' render={() => <Friends/>}/>
		<Route path='/profile/:userId?' render={() => <Profile />}/>
		<Route path='/login' render={() => <LoginPage />}/> 
		<Route exact path='/' render={() => <LoginPage />}/> 
	</div>
  );
}
export default Main;