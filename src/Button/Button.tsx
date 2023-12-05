import { useEffect, useState } from 'react';
import styles from './Button.module.scss'

type ButtonType = {
  buttonText: string;
  className: string;
  buttonType: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ buttonText , className, buttonType, disabled, onClick }: ButtonType) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className={styles.buttonWrapper}>
      <button type={buttonType} className={styles[className]} disabled={isDisabled} onClick={onClick}>{buttonText} </button> 
    </div>
  );
 
}

export default Button;