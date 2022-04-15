import { Link } from 'react-router-dom';
import Button from './Button/Button';
import Container from './Container/Container';

function LoginText() {
  return (
    <Container>
      <h2>You are not logged in</h2>
      <p>Please log in to proceed</p>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </Container>
  );
}

export default LoginText;
