import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{id: 1, message: 'Hi, how are you?', likesCount: 12},
	{id: 2, message: "It's my first post", likesCount: 11},
	{id: 2, message: "Bla", likesCount: 1},
	{id: 2, message: "Data", likesCount: 22}
];

let dialogs = [
	{id: 1, name: 'Dim'},
	{id: 2, name: 'Andr'},
	{id: 3, name: 'Kat'},
	{id: 4, name: 'Dim'},
	{id: 5, name: 'Andr'},
	{id: 6, name: 'Kat'}
];
	
let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'Yo'},
	{id: 3, message: 'Hey'},
	{id: 4, message: 'Buy'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
