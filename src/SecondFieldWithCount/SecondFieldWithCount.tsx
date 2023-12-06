import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import styles from './SecondFieldWithCount.module.scss'

const FieldWithCount = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(100);
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    console.log('Input change');
    document.title = String(inputValue);
  }

  const handleIncrement = () => {
    setCount(count + 1);
    setFontSize(fontSize + 1);
    console.log('Changing count');
  };

  return (
    <>
    <div className={styles.fieldWrapper}>
        <Button buttonText={"+"} className={"buttonPlus"} buttonType={"button"} onClick={handleIncrement} />
        <p className={styles.countText} style={{ fontSize: `${fontSize}px` }} > Count: {count} </p>
        <div className={styles.inputWrapper}>
          <input className={styles.input} onChange={handleChange}></input>
        </div>
      </div>
    </>
  );
}

export default FieldWithCount;
