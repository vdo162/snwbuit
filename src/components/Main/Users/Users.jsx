import React from 'react'
import s from './User.module.css'
import ava from '../../../img/icon.jpg';


export const Users = (props) => {
	return (
		<div>
			<Paginator onPageGanged={props.onPageGanged} totalCount={props.totalCount} pageSize={props.pageSize} currentPage = {props.currentPage} />
			<div>{
				props.users.map(u => <User user={u} key={u.id} unfollow={props.unfollow} follow={props.follow}/>)
			}</div>
		</div>
	);
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