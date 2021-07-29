import {MyPosts} from './MyPosts.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => dispatch(addPostActionCreator()),
		updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
	};
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);