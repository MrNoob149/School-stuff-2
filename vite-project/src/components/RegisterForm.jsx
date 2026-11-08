import useForm from "../hooks/formHooks.js";
import { useAuthentication } from '../hooks/apiHooks.js';
import { useNavigate } from 'react-router';


const RegisterForm = () => {
  const initValues = {
    username: '',
    password: '',
  };

  const { postUser } = useUser();


  const doRegister = async () => {
    try {
      const Register = await postUser(inputs)
      console.log('check', Register)

    } catch (error) {
      console.log('failed', error)
    }
    console.log(inputs);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValues);

  console.log(inputs);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div>
          <lavel htmlFor="registeremail">Email</lavel>
          <input
            name="email"
            type='type'
            id="registeremail"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};



export default RegisterForm;
