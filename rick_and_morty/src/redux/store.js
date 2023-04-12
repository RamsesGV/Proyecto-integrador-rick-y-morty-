import { createStore, applyMiddleware,compose} from 'redux'; 
import  thunkMiddleware  from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//esta para que funcione el redux devtools




const store = createStore( 
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    )// esta sirve para hacer peticiones api 
    



export default store;