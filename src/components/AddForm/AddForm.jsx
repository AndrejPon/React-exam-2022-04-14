import Button from '../UI/Button/Button';
import css from './AddForm.module.css';

function AddForm(props) {
  return (
    <>
      <h2 className={css.formTitle}>{props.children}</h2>
      <fieldset className={css.form}>
        <form>
          <input className={css.input} type='text' placeholder='Title' />
          <br />
          <textarea className={css.input} placeholder='Description'></textarea>
          <br />
          <Button>Add</Button>
        </form>
      </fieldset>
    </>
  );
}

export default AddForm;
