import React from 'react'
import s from './User.module.css'
import ava from '../../../img/icon.jpg';
import * as axios from 'axios';


export class Users extends React.Component{
	componentDidMount(){
		this.setUsers(this.props.currentPage);
	}
	
	setUsers = (pageNumber) => {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then((response)=>{
				this.props.setUsers(response.data.items);
				this.props.setTotalCountUsers(response.data.totalCount);
			});
	};
	
	onPageGanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.setUsers(pageNumber);
	}
	
	render () {
		return (
		<div>
			<Paginator onPageGanged={this.onPageGanged} totalCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage = {this.props.currentPage} />
			<div>{
				this.props.users.map(u => <User user={u} key={u.id} unfollow={this.props.unfollow} follow={this.props.follow}/>)
			}</div>
		</div>
		)
	}
}

class Paginator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {start: 1, maxButton: 10};
	}
	back = () => {
		let newStart = this.state.start - this.state.maxButton
		if(newStart < 1) {
			return;
		}
		this.setState({start: newStart});
	}
	next = () => {
		let newStart = this.state.start + this.state.maxButton
		if(newStart > Math.ceil(this.props.totalCount/this.props.pageSize)) {
			return;
		}
		this.setState({start: newStart});
	}
	render() {
		let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
		let pages = [];	
		let start = this.state.start;
		let end = start + this.state.maxButton - 1;
		if(end > pagesCount) {
			end = pagesCount;
		}
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}
		return <div>
			<button onClick={this.back}>{'<'}</button>
			{pages.map((p) => {
				return <button onClick={()=> this.props.onPageGanged(p)} className={(p === this.props.currentPage) ? s.selectedPage : ''} key={p}>{p}</button>
			})}
			<button onClick={this.next}>{'>'}</button>
		</div>;
	}
}

const User = (props) => {
	return <div className={s.User}>
		<div className={s.ava}>
			<img src={props.user.photos.small ? props.user.photos.small : ava} alt='' className={s.img}/>
			{props.user.followed ? 
				<button onClick={() => props.unfollow(props.user.id)}>Unfollow</button> : 
				<button onClick={() => props.follow(props.user.id)}>Follow</button>}
			
		</div>
		<div className={s.info}>
			<div className={s.text}>Name: {props.user.name}</div>
			<div>Status: {props.user.status}</div>
			<div>Location: props.user.location.city, props.user.location.country</div>
		</div>
	</div>;
}