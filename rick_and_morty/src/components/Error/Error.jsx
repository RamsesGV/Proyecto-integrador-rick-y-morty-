import { NavLink} from "react-router-dom";
const Error = () => { 
    
    console.log('estoy en la ruta');
return(
    <div>
        <h1>ERROR 404 EN CONSTRUCCION...</h1>
        <NavLink to='/home'>
        <button> Back to home.</button>
        </NavLink>
    </div>
)
}

export default Error;