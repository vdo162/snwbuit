import './App.css';
import {Header} from './components/Header/Header.jsx';
import {Navbar} from './components/Navbar/Navbar.jsx';
import {Main} from './components/Main/Main.jsx';
import {StatusFriends} from './components/StatusFriends/StatusFriends.jsx';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
	<BrowserRouter>
		<div className='appWrapper'>
			<Header />
			<Navbar />
			<Main />
			<StatusFriends />		
		</div>
	</BrowserRouter>
  );
}

export default App;
