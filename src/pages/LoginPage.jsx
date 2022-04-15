import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import FormInput from '../components/UI/FormInput/FormInput';

function LoginPage() {
  return (
    <Container>
      <h2 className='page-title'>Please login</h2>
      <FormContainer>
        <FormInput placeholder='Email Address' type='email' />
        <FormInput placeholder='Password' type='password' />
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
}

export default LoginPage;
