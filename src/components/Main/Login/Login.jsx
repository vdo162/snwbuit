import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Form, Field} from "react-final-form";
import {requiredField} from "../../../utils/validators/validators.js";
import {Input} from '../../common/FormsControls/FormsControls.js';
import {login} from '../../../redux/auth-reducer.js';
import s from './Login.module.css';

const LoginForm = (props) => {
		return (
		<Form onSubmit={props.onSubmit}>
			{({ handleSubmit, submitError, submitErrors}) =>{
				return (
					<form className={s.form} onSubmit={handleSubmit}>
						<div>
							<Field 
								name='email' 
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
						{submitErrors && submitErrors.captcha && <div className={s.error}>
							{submitErrors.captcha}
						</div>}
						<div>
							<button>Login</button>
						</div>
						{submitError && <div className={s.error}>
							{submitError}
						</div>}
					</form>
				) 
			}}
		</Form>
	);
}

const Login = (props) => {
	const onSubmit = (formData, formAPI, onErrorCallback) => {
		const {email, password, rememberMe} = formData;
		props.login(email, password, rememberMe, onErrorCallback);
	}
	if(props.isAuth) return <Redirect to='/profile'/>;
	return (
		<div>
			vdo162@gmail.com <br/>c4bjkDH5r
			
			<h1>Login</h1>
			<LoginForm onSubmit={onSubmit}/>
		</div>
	);
}

const mapStateToProps = (state)=>({
	isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);