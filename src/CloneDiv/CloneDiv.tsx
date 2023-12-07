import { useRef } from 'react';
import Button from '../Button/Button';
import styles from './CloneDiv.module.scss'

const CloneDiv = () => {
  const box = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (box.current) {
      box.current.innerHTML += `<div class="${styles.clonedDiv}"></div>`;
    }
  }
  return ( 
    <>
    <div className={styles.wrapper}>
      <div className={styles.div} ref={box}></div>
      <Button buttonText={'Clone Div'} className={'divButton'} buttonType={'button'} onClick={handleClick} />
    </div>
  </>
   );
}
 
export default CloneDiv;