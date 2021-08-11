import React from 'react'
import s from './Paginator.module.css'

export class Paginator extends React.Component {
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
		return <div className={s.container}>
			<button onClick={this.back}>{'<'}</button>
			{pages.map((p) => {
				return <button onClick={()=> this.props.onPageGanged(p)} className={(p === this.props.currentPage) ? s.selectedPage : ''} key={p}>{p}</button>
			})}
			<button onClick={this.next}>{'>'}</button>
		</div>;
	}
}