import { useRef, useState } from "react";
import Button from "../Button/Button";
import styles from './SecondInputField.module.scss';

const SecondInputField = () => {

  const [inputValue, setInputValues] = useState(['']);
  const [currentInput, setCurrentInput] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setInputValues(prevValues => [...prevValues, currentInput]);
    setCurrentInput('');
    ref.current?.focus();
  }

  const handleInputChange = (event: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any; preventDefault: () => void;
  }) => {
    setCurrentInput(event.target.value);
  }

  return (
    <>
      <div className={styles.formWrapper}>
        <form className={styles.secondInputForm} onSubmit={handleSubmit}>
          <input ref={ref} className={styles.secondInput} onChange={handleInputChange} value={currentInput} placeholder="Write something..." />
          <Button buttonType='submit' buttonText="Submit" className='buttonPrimary' />
        </form>
      </div>
      <div className={styles.inputValuesDiv}>
        {inputValue.map((value, index) => (
          <div key={index} className={styles.inputValueItem}>
            {value}
          </div>
        ))}
      </div>
    </>
  )
}
export default SecondInputField;