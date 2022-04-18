// import { useState } from 'react';
import css from './FormInput.module.css';

function FormInput(props) {
  const { placeholder, type = 'text', name, value, onChange } = props;

  // const [value, setValue] = useState('');
  // const onChange = (e) => {
  //   e.preventDefault();
  //   setValue(e.target.value);
  // };
  return (
    <>
      <input
        className={css.formInput}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default FormInput;
