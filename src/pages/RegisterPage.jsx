import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import Form from '../components/UI/Form/Form';
import FormInput from '../components/UI/FormInput/FormInput';

function RegisterPage(props) {
  return (
    <Container>
      {/* <Form onSubmit={props.onSubmit}>Please register</Form> */}
      <h2 className='page-title'>Please register</h2>
      <FormContainer>
        <FormInput placeholder='Email Address' type='email' />
        <FormInput placeholder='Password' type='password' />
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
}

export default RegisterPage;
