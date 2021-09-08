import {MyPosts} from './MyPosts.jsx';
import {addPost, putLike} from '../../../../redux/profile-reducer.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	};
}

export const MyPostsContainer = connect(mapStateToProps, {addPost, putLike})(MyPosts);