import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import styles from './FieldWithCount.module.scss'

const FieldWithCount = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    console.log('Input change');
  }

  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    console.log('Changing count');
  };

  return (
    <>
      <div className={styles.fieldWrapper}>
        <Button buttonText={"+"} className={"buttonPlus"} buttonType={"button"} onClick={handleIncrement} />
        <p className={styles.countText}> Count: {count} </p>
        <div className={styles.inputWrapper}>
          <input className={styles.input} onChange={handleChange}></input>
          <p className={styles.inputText}>{inputValue}</p>
        </div>
      </div>
    </>
  );
}

export default FieldWithCount;
