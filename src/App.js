import './App.css';
import {Header} from './components/Header/Header.jsx';
import {Navbar} from './components/Navbar/Navbar.jsx';
import {Main} from './components/Main/Main.jsx';
import {StatusFriends} from './components/StatusFriends/StatusFriends.jsx';

const App = (props) => {
  return (
	<div className='appWrapper'>
		<Header />
		<Navbar />
		<Main state={props.state} store={props.store} dispatch={props.dispatch}/>
		<StatusFriends />		
	</div>
  );
}

export default App;
