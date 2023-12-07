import './App.scss'
import Button from './Button/Button'
import Count from './Count/Count'
import InputField from './InputField/InputField'
import SecondInputField from './SecondIputField/SecondInputField'
import DropdownWithColors from './DropdownWithColors/DropdownWithColors'
import FieldWithCount from './FieldWithCount/FieldWithCount'
import SecondFieldWithCount from './SecondFieldWithCount/SecondFieldWithCount'
import ChangeDivColor from './ChangeDivColor/ChangeDivColor'
import CloneDiv from './CloneDiv/CloneDiv'
import MoveDiv from './MoveDiv/MoveDiv'
import { useEffect } from 'react'

function App() {
  
  useEffect(() => {
    console.log('Render');
  });

  return (
    <>
      <InputField autoFocus={true} />
      <SecondInputField />
      <Button buttonType='button' buttonText="Button" className='buttonSecondary' disabled={true} />
      <Count numberToMultiply={2} />
      <DropdownWithColors />
      <FieldWithCount />
      <SecondFieldWithCount />
      <ChangeDivColor />
      <CloneDiv />
      <MoveDiv />
    </>
  )
}

export default App

