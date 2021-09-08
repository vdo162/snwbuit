import s from './FormsControls.module.css';

export const LoginInput = ({input, meta, ...props}) => {
	const hasError = (meta.touched && meta.error) || meta.submitError;
	return (
		<div className={s.block}>
			<fieldset className={s.item + ' ' + (hasError && s.itemError)}>
				<legend>{props.legend}</legend>
				<input {...input} {...props} className={s.input} />
			</fieldset>
			{hasError && 
				<div className={s.error}>
					{meta.error || meta.submitError}
				</div>
			}
		</div>
	);
}

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
	const hasError = (touched && error) || submitError;
	return (
		<div>
			<div className={`${s.textarea} ${hasError && s.errorT}`}>
				{children}
			</div>
			<div>
				{hasError && <div className={s.errorText}>{error || submitError}</div>}
			</div>
		</div>
	);
}