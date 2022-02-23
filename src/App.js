import React from 'react';
import {initializeApp} from './redux/app-reducer.js';
import {connect} from 'react-redux';
import {Preloader} from './components/common/Preloader/Preloader.jsx';
import './App.css';
import Header from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Main from './components/Main/Main.jsx';
import StatusFriends from './components/StatusFriends/StatusFriendsContainer.jsx';

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

class AppContainer extends React.Component {
	catchAllUnhandledErrors = (e) => {
		alert("Необработанный промис - позор программисту: " + e.reason.message);
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}
	render() {
		return (!this.props.initialized)
			? <Preloader/>
			: <App {...this.props}/>;

	}
}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	};
}
export default connect(mapStateToProps, {initializeApp})(AppContainer);
