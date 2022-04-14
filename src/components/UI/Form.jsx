import Button from './Button';
import css from './Form.module.css';
function Form(props) {
  return (
    <>
      <h2 className={css.formTitle}>{props.children}</h2>
      <fieldset className={css.form}>
        <form>
          <input
            className={css.input}
            type='email'
            placeholder='Email address'
          />
          <br />
          <input className={css.input} type='password' placeholder='Password' />
          <br />
          <Button>Submit</Button>
        </form>
      </fieldset>
    </>
  );
}

export default Form;
