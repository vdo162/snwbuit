import s from './Login.module.css';

const Login = () => {
  return (
	<div className={s.login}>
		Write your login and password
		<div className={s.login}>
			<input placeholder='login'/>
		</div>
		<div className={s.login}>
			<input placeholder='password'/>
		</div>
		<div className={s.login}>
			<button>Log in</button>
		</div>
	</div>
  );
}
export default Login;