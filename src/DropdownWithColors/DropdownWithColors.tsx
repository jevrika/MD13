import { ChangeEvent, useState } from 'react';
import Button from '../Button/Button';
import styles from './DropdownWithColors.module.scss'

const DropdownWithColors = () => {

  const [selectedColor, setselectedColor] = useState('')
  const [colors, setColors] = useState<string[]>([])
  const [showDiv, setShowDiv] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>)=> {
    setselectedColor(event.target.value)
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
         <option value="" >
          Choose Color
          </option>
          <option value="B3D3B8" >
          Light Moss Green
          </option>
          <option value="80A5B2" >
          Pewter Blue
          </option>
          <option value="6B6282" >
          Old Lavender
          </option>
          <option value="CF7277" >
          Cinnamon Satin
          </option>
          <option value="E8B558" >
          Sunray
          </option>
        </select>
    </div>
      <div className={styles.colorBoxWrapper}>
      {showDiv &&
        colors.map((color, index) => (
          <div className={styles.colorBox} key={index} style={{ backgroundColor: `#${color}` }}>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropdownWithColors;