import React, { useState } from 'react';
import s from './Form.module.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    if (event.target.value.includes('@') && event.target.value.includes('.')) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (event.target.value === '') setIsValid(true);
  }

  function send() {
    if (value != '' && isValid) {
      setValue('');
    }
  }
  return (
    <div className={s.form}>
      <input
        placeholder="Updates in your inbox..."
        value={value}
        onChange={onChange}
        className={isValid ? '' : s.inputNoValid}
      />
      <button onClick={send}>Go</button>
      <div className={[s.infoValid, isValid ? '' : s.infoValidShow].join(' ')}>
        Please insert a valid email
      </div>
    </div>
  );
};

export default Form;
