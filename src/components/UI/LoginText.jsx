import css from './LoginText.module.css';
import { Link } from 'react-router-dom';
import Button from './Button/Button';
import Container from './Container/Container';

function LoginText() {
  return (
    <Container>
      <div className={css.loginText}>
        <h2>You are not logged in</h2>
        <p>Please log in to proceed</p>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
        <p>Do not have an account?</p>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </div>
    </Container>
  );
}

export default LoginText;
