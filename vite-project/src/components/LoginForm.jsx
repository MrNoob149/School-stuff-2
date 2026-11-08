import useForm from "../hooks/formHooks.js";
import { useAuthentication } from '../hooks/apiHooks.js';
import { useNavigate } from 'react-router';


const LoginForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const doLogin = async () => {
    try {
      const Login = await postLogin(inputs)
      console.log('check', Login)

      localStorage.setItem('token', Login.token)
    } catch (error) {
      console.log('failed', error)
    }
    console.log(inputs);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValues);

  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};



export default LoginForm;
