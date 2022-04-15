import { Link } from 'react-router-dom';
import Container from '../components/UI/Container/Container';

function ErrorPage() {
  return (
    <Container>
      <h1>Page you are looking for is not found</h1>
      <Link to={'/register'}>Register</Link>
    </Container>
  );
}

export default ErrorPage;
