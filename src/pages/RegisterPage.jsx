import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import { sendFetch } from '../helpers/helper';

const initErrors = {
  email: '',
  password: '',
};

function RegisterPage(props) {
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
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();

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

    const newRegObj = {
      email: email,
      password: password,
    };
    console.log('newRegObj ===', newRegObj);
    const sendResult = await sendFetch('auth/register', newRegObj);
    console.log('sendResult ===', sendResult);
    if (sendResult.changes === 1) {
      history.push('/login');
    }
    if (sendResult.err) {
      setIsError(true);
    }
  }
  return (
    <Container>
      <FormContainer>
        <h2 className='page-title'>Please register</h2>
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
          <Button>Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default RegisterPage;
