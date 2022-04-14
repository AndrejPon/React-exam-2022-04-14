import css from './FormContainer.module.css';

function FormContainer(props) {
  return (
    <>
      <fieldset className={`${css.formContainer} ${props.className}`}>
        <form>{props.children}</form>
      </fieldset>
    </>
  );
}

export default FormContainer;
