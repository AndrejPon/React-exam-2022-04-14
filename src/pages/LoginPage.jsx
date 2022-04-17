import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import { sendFetch } from '../helpers/helper';
import AuthContext from '../store/authContext';
import toast, { Toaster } from 'react-hot-toast';

const initErrors = {
  email: '',
  password: '',
};

function LoginPage() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [email, password, errorObj]);

  async function submitHandler(e) {
    e.preventDefault();
    setIsError(false);
    setErrorObj(initErrors);
    authCtx.login();

    if (email.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        email: 'Email cannot be blank',
      }));
    }
    if (password.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        password: 'Password cannot be blank',
      }));
    }

    const newLogObj = {
      email: email,
      password: password,
    };
    console.log('newLogObj ===', newLogObj);
    const sendResult = await sendFetch('auth/login', newLogObj);
    console.log('sendResult ===', sendResult);
    if (sendResult.msg === 'Successfully logged in') {
      history.push('/home');
    }
    if (sendResult.err) {
      toast.error('Failed to login. Please check your data.');
      setTimeout(() => history.push('/login'), 3000);
      setIsError(true);
    }
  }
  return (
    <Container>
      <Toaster toastOptions={{ position: 'top-center' }} />
      <FormContainer>
        <h2 className='page-title'>Please login</h2>
        <form onSubmit={submitHandler}>
          {isError && <h3 className='error-message'>Please check the form</h3>}
          <input
            type='email'
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errorObj.email && <p className='error-message'>{errorObj.email}</p>}
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errorObj.password && (
            <p className='error-message'>{errorObj.password}</p>
          )}
          <Button>Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default LoginPage;
