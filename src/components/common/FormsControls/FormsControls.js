import s from './FormsControls.module.css';

export const Input = ({input, meta, ...props}) => (
	<FormControl {...meta}>
		<input {...input} {...props} />
	</FormControl>
);

export const Textarea = ({input, meta, ...props}) => (
	<FormControl {...meta}>
		<textarea {...input} {...props} />
	</FormControl>
);


const FormControl = ({touched, error, children, submitError}) => {
	const hasError = touched && error || submitError;
	return (
		<div>
			<div className={`${s.textarea} ${hasError && s.error}`}>
				{children}
			</div>
			<div>
				{hasError && <div className={s.errorText}>{error || submitError}</div>}
			</div>
		</div>
	);
}