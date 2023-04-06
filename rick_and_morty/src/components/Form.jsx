import React from "react"
import { useState } from "react"
import validationF from "./validation"
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
        <form>
            <label htmlFor="email"></label>
            <input name="email" type="email" placeholder="Example@email.com" value={userData.email} onChange={handleOnChange}></input>
            {errors.email && <p>{errors.email}</p>}
            <hr/>
            <label htmlFor="password"></label>
            <input name="password" type="password" placeholder="******" value={userData.password} onChange={handleOnChange}></input>
            {errors.password && <p>{errors.password}</p>}
            <hr/>
            <button onClick={handleOnSubmit}>Submit</button>
        </form>
    )
}

export default Form