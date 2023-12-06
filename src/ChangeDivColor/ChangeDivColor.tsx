import { useRef } from 'react';
import Button from '../Button/Button';
import styles from './ChangeDivColor.module.scss'

const ChangeDivColor = () => {
  const box = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (box.current) {
      box.current.style.backgroundColor = 'gold';
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.div} ref={box}></div>
        <Button buttonText={'Change Color'} className={'divButton'} buttonType={'button'} onClick={handleClick} />
      </div>
    </>
  );
}

export default ChangeDivColor;