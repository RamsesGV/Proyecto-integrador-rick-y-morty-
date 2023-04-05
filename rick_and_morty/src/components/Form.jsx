import React from "react"
import { useState } from "react"
import validationF from "./validation"
const Form = () => { 

const [userData, setUserData] = useState({
    email:'',
    paswordd:''
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




    return(
        <form>
            <label htmlFor="email"></label>
            <input name="email" type="email" placeholder="Example@email.com" value={userData.email} onChange={handleOnChange}></input>
            {errors.email && <p>{errors.email}</p>}
            <hr/>
            <label htmlFor="password"></label>
            <input name="paswordd" type="password" placeholder="******" value={userData.paswordd} onChange={handleOnChange}></input>
            {errors.paswordd && <p>{errors.paswordd}</p>}
            <hr/>
            <button>Submit</button>
        </form>
    )
}

export default Form