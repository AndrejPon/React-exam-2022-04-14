// import AddForm from '../components/AddForm/AddForm';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import FormInput from '../components/UI/FormInput/FormInput';

function AddPage() {
  return (
    <Container>
      {/* <AddForm>Please add your skills</AddForm> */}
      <h2 className='page-title'>Please add your skills</h2>
      <FormContainer>
        <FormInput placeholder='Title' type='text' />
        <textarea placeholder='Description' />
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
}

export default AddPage;
