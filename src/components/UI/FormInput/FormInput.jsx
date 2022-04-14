import { useState } from 'react';
import css from './FormInput.module.css';

function FormInput(props) {
  const { placeholder, type = 'text' } = props;

  const [value, setValue] = useState('');
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <>
      <input
        className={css.formInput}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormInput;
