// import AddForm from '../components/AddForm/AddForm';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';
import { sendFetch, sendFetchWithToken } from '../helpers/helper';

const initErrors = {
  title: '',
  description: '',
};

function AddPage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [title, description, errorObj]);

  async function submitHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();

    if (title.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        title: 'Title cannot be blank',
      }));
    }
    if (description.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        description: 'Description cannot be blank',
      }));
    }

    const newObj = {
      title: title,
      description: description,
    };
    console.log('newObj ===', newObj);
    const sendResult = await sendFetchWithToken('content/skills', newObj);
    console.log('sendResult ===', sendResult);
    if (sendResult.changes === 1) {
      history.push('/home');
    }
    if (sendResult.err) {
      setIsError(true);
    }
  }
  return (
    <Container>
      <FormContainer>
        <form onSubmit={submitHandler}>
          <h2 className='page-title'>Please add your skills</h2>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
          />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />
          <Button>Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default AddPage;
