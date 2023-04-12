import { NavLink} from "react-router-dom";
import './Erros.modules..css';
const Error = () => { 
    
    console.log('estoy en la ruta');
return(
    <div>
        <h1 className="Errorh1">ERROR 404 EN CONSTRUCCION...</h1>
        <NavLink to='/home'>
        <button className="buttonHE"> Back to home.</button>
        </NavLink>
    </div>
)
}

export default Error;