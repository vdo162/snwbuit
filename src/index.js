import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {subscribe, state, addPost, updateNewPostText} from './redux/state.js';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
	  <React.StrictMode>
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</BrowserRouter>
	  </React.StrictMode>,
	  document.getElementById('root')
	);
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

