import s from './Preloader.module.css'

export const Preloader = (props) => {
	return (
		<div className={s.preloader}>
			<div className={s.wrapper}>
				<div className={s.squares}>
					<div className={s.square + ' ' + s.square1}></div>
					<div className={s.square + ' ' + s.square2}></div>
					<div className={s.square + ' ' + s.square4}></div>
					<div className={s.square + ' ' + s.square3}></div>
				</div>
				<div className={s.text}>Downloading...</div>
			</div>
		</div>
	)
}