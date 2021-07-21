import s from './Main.module.css';
import {Profile} from './Profile/Profile.jsx';
import {Dialogs} from './Dialogs/Dialogs.jsx';
import {Friends} from './Friends/Friends.jsx';
import {Route} from 'react-router-dom';

export const Main = () => {
  return (
	<div className={s.main}>
		<Route path='/profile' component={Profile}/>
		<Route path='/dialogs' component={Dialogs}/>
		<Route path='/friends' component={Friends}/>
	</div>
  );
}
