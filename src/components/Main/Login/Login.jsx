import { Form, Field } from "react-final-form";
import s from './Login.module.css';

const Login = (props) => {
	const onSubmit = (value) => {
		console.log(value);
	}
	
	return (
		<Form 
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values, ...props }) =>{
				
				return (
					<form name='auth' className={s.form} onSubmit={handleSubmit}>
						Write your login and password
						<div>
							<Field name='login' component='input'  placeholder='Email'/>
						</div>
						<div>
							<Field name='password' component='input' type='password' placeholder='Password'/>
						</div>
						<div>
							<Field name='rememberMe' component='input' type='checkbox'/> remember me
						</div>
						<div>
							<button>Login</button>
						</div>
					</form>
				) 
			 }}
		/>
	);
}
export default Login;