import { SetStateAction, useState } from 'react';
import Button from '../Button/Button';
import styles from './DropdownWithColors.module.scss'

const DropdownWithColors = () => {

  const [selectedColor, setselectedColor] = useState()
  const [colors, setColors] = useState([])

  const [showDiv, setShowDiv] = useState(false)


  const handleChange = (e) => {
    setselectedColor(e.target.value)

  };

  const handleClick = () => {
    if (selectedColor) {
      setColors([...colors, selectedColor]);
      setShowDiv(true);
    }
  }
  return (
    <>
    <div className={styles.buttonAndDropdownWrapper}>
        <Button buttonText={'+'} className={'buttonPlus'} buttonType={'submit'} onClick={handleClick} />
        <select className={styles.dropdown} value={selectedColor} onChange={handleChange}>
          <option value="blue" style={{ color: 'aqua' }}>
            Blue
          </option>
          <option value="red" style={{ color: 'red' }}>
            Red
          </option>
          <option value="orange" style={{ color: 'orange' }}>
            Orange
          </option>
          <option value="green" style={{ color: 'green' }}>
            Green
          </option>
          <option value="pink" style={{ color: 'pink' }}>
            Pink
          </option>
        </select>
    </div>
      <div className={styles.colorBoxWrapper}>
      {showDiv &&
        colors.map((color, index) => (
          <div className={styles.colorBox} key={index} style={{ backgroundColor: color }}>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropdownWithColors;