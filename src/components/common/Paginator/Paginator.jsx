import {useState} from 'react'
import s from './Paginator.module.css'

export const Paginator = (props) => {
	const pagesCount = Math.ceil(props.totalCount / props.pageSize)
	
	let pages = [];	
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	
	const portionCount = Math.ceil(pagesCount / props.portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPageNumber = (portionNumber - 1) * props.portionSize + 1;
	const rightPageNumber = portionNumber * props.portionSize;
	
	return <div className={s.container}>
		<button onClick={() => portionNumber > 1 && setPortionNumber(portionNumber - 1)}>{'<'}</button>
		{pages
			.filter(p => p >= leftPageNumber && p <= rightPageNumber)
			.map((p) => {
			return <button onClick={()=> props.onPageGanged(p)} className={(p === props.currentPage) ? s.selectedPage : ''} key={p}>{p}</button>
		})}
		<button onClick={() => portionNumber < portionCount && setPortionNumber(portionNumber+1)}>{'>'}</button>
	</div>;
}