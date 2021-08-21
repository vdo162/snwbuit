import {MyPosts} from './MyPosts.jsx';
import {addPostActionCreator} from '../../../../redux/profile-reducer.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
	};
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);