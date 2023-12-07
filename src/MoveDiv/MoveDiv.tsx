import { useRef } from 'react';
import Button from '../Button/Button';
import styles from './MoveDiv.module.scss'

const MoveDiv = () => {
  const box = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if(box.current) {
    box.current.style.position = "absolute";
    box.current.style.top = "0px";
    box.current.style.right = "0px"
    box.current.innerHTML = `<p class='${styles.divText}'>esmu strūrī</p>`
    }
  }

  
  return ( 
    <>
    <div className={styles.wrapper}>
      <div className={styles.box} ref={box}></div>
      <Button buttonText={'Send dov to corner'} className={'divButton'} buttonType={'button'} onClick={handleClick}/>
    </div>
    </>
   );
}
 
export default MoveDiv;