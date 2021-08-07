import './App.css';
import Header from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import StatusFriends from './components/StatusFriends/StatusFriends.jsx';

const App = (props) => {
  return (
	<div className='appWrapper'>
		<Header />
		<Navbar />
		<Main />
		<StatusFriends />		
	</div>
  );
}

export default App;
