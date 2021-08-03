import {Users} from './Users.jsx'
import {connect} from 'react-redux';
import {followAC, unfollowAC, setUsersAC, setTotalCountUsersAC, setCurrentPageAC} from '../../../redux/users-reducer.js';

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	};
}

const mapDispatchToProps = (dispatch) => { 
	return {
		follow: (userId) => dispatch(followAC(userId)),
		unfollow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
		setTotalCountUsers: (totalCount) => dispatch(setTotalCountUsersAC(totalCount))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);