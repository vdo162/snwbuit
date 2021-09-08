import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Form, Field} from "react-final-form";
import {requiredField} from "../../../utils/validators/validators.js";
import {LoginInput} from '../../common/FormsControls/FormsControls.js';
import {login} from '../../../redux/auth-reducer.js';
import s from './Login.module.css';
import captcha from '../../../img/captcha.png';

const LoginForm = (props) => {
	return (
		<Form onSubmit={props.onSubmit} >
			{({ handleSubmit, errors, submitError, submitErrors, ...props}) =>{
				return (
					<div className={s.loginForm}>
						<form onSubmit={handleSubmit} className={s.form} >
							<div className={s.wrapper + ' ' + (submitError && s.wrapperError)}>
								<div className={s.title}>LOGIN</div>
								<Field 
									name='email' 
									render={LoginInput} 
									validate={requiredField}
									legend='Email'/>
								<Field 
									name='password' 
									render={LoginInput} 
									type="password"
									validate={requiredField}
									legend='Password'/>
								{submitErrors && submitErrors.captcha&& 
									<Field 
										name='captcha' 
										render={({input, meta, ...props}) => {
											return (
												<div className={s.block}>
													<div className={s.captcha}>
														<img src={captcha} alt=''/>
													</div>
													<fieldset className={s.item + ' ' + s.itemError}>
														<legend>Captcha</legend>
														<input {...input} {...props} className={s.input} />
													</fieldset>
													<div className={s.error}>
														{meta.submitError}
													</div>
												</div>
											);
										}} 
									/>
								}
								<div className={s.block + ' ' + s.submit}>
									<div className={s.remember}>
										<Field name='rememberMe' component='input' type='checkbox'/> Remember Me
									</div>
									<button className={s.button}>Login</button>
								</div>
							</div>
							{submitError && 
								<div className={s.error}>
									{submitError}
								</div>}
							<div className={s.testAuth}>
								<div>Test login: free@samuraijs.com</div>
								<div>Test password: free</div>
							</div>
						</form>
					</div>
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
	return <LoginForm onSubmit={onSubmit}/>;
}

const mapStateToProps = (state)=>({
	isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login})(Login);