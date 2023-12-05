import { useState } from 'react';
import Button from '../Button/Button'
import styles from './Count.module.scss'

const Count = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return ( 
    <>
      <Button buttonType='button' buttonText={`Count:${count}`} className='buttonPrimary' onClick={handleIncrement}/>
      <div className={styles.countField}> {count * 2 }</div>
    </>
   );
}
 
export default Count;