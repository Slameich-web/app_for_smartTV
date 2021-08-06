import React from "react";
import { Link } from "react-router-dom";



function Form() {

  const [checkboxState, setCheckboxState] = React.useState(false)

  const [numbers, setNumbers] = React.useState("")

  const [fullPhoneNumber, setFullPhoneNumber] = React.useState(false)

  let phoneNumber = `+7(`

  for(let i = 0; i<10;i++){
    if(i===3){
      phoneNumber+=")"
    }
    if(i===6){
      phoneNumber+="-"
    }
    if(i===8){
      phoneNumber+="-"
    }
    if(numbers[i]===undefined){
      phoneNumber+="_"
    }else{
      phoneNumber+=numbers[i]
    }
  }

  React.useEffect(()=>{
    if(numbers.length>=10){
      return setFullPhoneNumber(true)
    }else{
      setFullPhoneNumber(false)
    }
  },[numbers])

  let buttonStatus = checkboxState && fullPhoneNumber

    return (
      <div className="form">
          <h3 className="form_title">Введите ваш номер мобильного телефона</h3>
          <div className="phone_number">{phoneNumber}</div>
          <p className="form_text">и с Вами свяжется наш менеджер для дальнейшего консультанции</p>
          <div className="keyboard">
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 1])}}>1</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 2])}}>2</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 3])}}>3</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 4])}}>4</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 5])}}>5</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 6])}}>6</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 7])}}>7</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 8])}}>8</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 9])}}>9</button>
            <button className="keyboard_button keyboard_button_delete" onClick={()=>{setNumbers([])}}>Стереть</button>
            <button className="keyboard_button" onClick={()=>{setNumbers([...numbers, 0])}}>0</button>
          </div>
          <div className="agreed">
            <input className="checkbox" type="checkbox" value={checkboxState} onChange={e => setCheckboxState(!checkboxState)}></input>
            <div className ="agreed_text">Согласие на обработку персональных данных</div>
          </div>
          <div className="сonfirm">
            <Link to="completed"><button disabled={!buttonStatus} className={buttonStatus ? "active_buttton сonfirm_button" : "сonfirm_button"}>ПОДТВЕРРДИТЬ НОМЕР</button></Link>
          </div>
      </div>
    );
  }
  
  export default Form;
  