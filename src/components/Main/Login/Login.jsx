import {Form, Field} from "react-final-form";
import {FORM_ERROR} from "final-form";
import {requiredField} from "../../../utils/validators/validators.js";
import {Input} from '../../common/FormsControls/FormsControls.js';
import s from './Login.module.css';

const Login = (props) => {
	const onSubmit = (values) => {
		console.log('send');
		if(values.login !== 'dm' || values.password !== 'md'){
			return {[FORM_ERROR]: 'No right login or password'};
		}
		return undefined;
	}
	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit, submitError}) =>{
				return (
					<form className={s.form} onSubmit={handleSubmit}>
					<h1>Login</h1>
						<div>
							<Field 
								name='login' 
								component={Input} 
								placeholder="Email"
								type="text"
								validate={requiredField}/>
						</div>
						<div>
							<Field 
								name='password' 
								component={Input} 
								placeholder="Password"
								type="password"
								validate={requiredField}/>
						</div>
						<div>
							<Field name='rememberMe' component='input' type='checkbox'/> remember me
						</div>
						{submitError && <div className="error">{submitError}</div>}
						<div>
							<button>Login</button>
						</div>
					</form>
				) 
			}}
		</Form>
	);
}
export default Login;