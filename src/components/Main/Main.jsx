import {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
import s from './Main.module.css';
import {Preloader} from '../common/Preloader/Preloader';

const Dialogs = lazy(() => import ('./Dialogs/DialogsContainer.js'));
const Profile = lazy(() => import ('./Profile/ProfileContainer.jsx'));
const Users = lazy(() => import ('./Users/UsersContainer.jsx'));
const Friends = lazy(() => import ('./Friends/FriendsContainer.jsx'));
const LoginPage = lazy(() => import ('./Login/Login.jsx'));

const Main = (props) => {
  return (
	<div className={s.main}>
		<Suspense fallback={<Preloader message='Loading page...'/>}>
			<Route path='/dialogs/:userId?' render={() => <Dialogs />}/>
			<Route path='/users' render={() => <Users />}/>
			<Route path='/friends' render={() => <Friends/>}/>
			<Route path='/profile/:userId?' render={() => <Profile />}/>
			<Route path='/login' render={() => <LoginPage />}/> 
			<Route exact path='/' render={() => <LoginPage />}/> 
		</Suspense>
	</div>
  );
}
export default Main;