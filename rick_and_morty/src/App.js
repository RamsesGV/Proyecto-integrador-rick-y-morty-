import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Error from './components/Error';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '40985a843964.676b0d39d16108d6a9e0'

function App() {

const [characters,setCharacter] = useState([])

const  onSearch = (id) => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   .then (response => response.data)
   .then((data) => {
      if (data.id) {
         setCharacter((oldChars) => [...oldChars, data]);
      } else {
         navigate('/:error')
      }
   })
   .catch((error) =>{
      console.log(error);
      navigate('/:error')
   })
}

const onClose = (id) => { 
   const characterFiltered = characters.filter(character => 
      character.id !== (id))
      console.log(characterFiltered);
      setCharacter(characterFiltered)
}
const location = useLocation()
const showNav = !(location.pathname === '/' || location.pathname === '/:error');

const navigate = useNavigate()




const[access,setAccess] = useState(false)
const EMAIL = 'ramses@gmail.com' 
const PASSWORD = 'ramses1'

const login = (userData) => {
   if(EMAIL === userData.email && PASSWORD === userData.password) { 
      setAccess(true)
      navigate('/home')
   }
}

const logout = () => { 
   setAccess(false)
   navigate('/')
}

useEffect(()=>{
!access && navigate('/')
},[access])


   return (
      <div className='App'>
      {showNav && <Nav onSearch={onSearch} logout={logout}></Nav>  }
      <Routes>
      <Route path='/home' element={<Cards characters={characters}  onClose={onClose}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/' element={<Form login={login}/>} />
      <Route path='/:error' element={<Error/>} /> 
      </Routes>
      </div>
   );
}

export default App;


