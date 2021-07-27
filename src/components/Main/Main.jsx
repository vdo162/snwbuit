import s from './Main.module.css';
import {Profile} from './Profile/Profile.jsx';
import {DialogsContainer} from './Dialogs/DialogsContainer.jsx';
import {Friends} from './Friends/Friends.jsx';
import {Route} from 'react-router-dom';

export const Main = (props) => {
  return (
	<div className={s.main}>
		<Route path='/profile' render={() => <Profile store={props.store}/>}/>
		<Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
		<Route path='/friends' render={() => <Friends/>}/>
	</div>
  );
}
