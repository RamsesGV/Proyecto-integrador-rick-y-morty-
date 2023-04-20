import { NavLink} from "react-router-dom";
import './Erros.modules..css';
const Error = () => { 
    
    console.log('estoy en la ruta');
return(
    <div>
        <h1 className="Errorh1">ERROR 404</h1>

<iframe title="RickYmorty" className="gif" allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/5pUszK9PTZhrlToanq/video" width="480"></iframe>

<NavLink to='/home'>
        <button className="buttonHE"> Back to home.</button>
</NavLink>
    </div>
)
}

export default Error;