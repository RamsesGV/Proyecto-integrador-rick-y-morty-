import React from "react"
import { useState } from "react"
import validationF from "../Validation/validation"
import './Form.modules.css'
const Form = ({login}) => { 

const [userData, setUserData] = useState({
    email:'',
    password:''
})

const handleOnChange = (event) => { 
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    validate()
}

let [errors,setErrors] = useState({})

const validate = () => {  
const errors = validationF(userData)
setErrors(errors)

}

const handleOnSubmit = (event) =>{ 
event.preventDefault()
login(userData)
}




    return(
<div className="page-container"> 
    <div className="form-container"> 
        <form>
            <label className="labelEmail"  htmlFor="email">email: </label>
            <input className="inputEmail" name="email" type="email" placeholder="Example@email.com" value={userData.email} onChange={handleOnChange}></input>
            {errors.email && <p className="errorE">{errors.email}</p>}
            <hr className="hr1"/>
            <label className="labelPassword" htmlFor="password">Password: </label>
            <input className="inputPassword" name="password" type="password" placeholder="******" value={userData.password} onChange={handleOnChange}></input>
            {errors.password && <p className="errorP">{errors.password}</p>}
            <hr className="hr2"/>
            <button className="buttonSubmit" onClick={handleOnSubmit}>Submit</button>
        </form>
    </div>
</div>    
    )
}

export default Form