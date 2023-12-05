import styles from './InputField.module.scss'

type AutoFocusType = {
  autoFocus: boolean;
  tabIndex?: number;
};

const InputField = ({ autoFocus}: AutoFocusType) => {

  return (
    <div className={styles.input__wrapper}>
      <input type='text' autoFocus={autoFocus} className={styles.input} placeholder='Write something....' required></input>
    </div>
  )
}

export default InputField;