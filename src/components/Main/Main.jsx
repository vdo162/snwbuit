import s from './Main.module.css';
import {Profile} from './Profile/Profile.jsx';
import {Dialogs} from './Dialogs/Dialogs.jsx';
import {Friends} from './Friends/Friends.jsx';
import {Route} from 'react-router-dom';

export const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
		<Route path='/dialogs' render={() => <Dialogs store={props.store} dispatch={props.dispatch}/>}/>
		<Route path='/friends' render={() => <Friends/>}/>
	</div>
  );
}
