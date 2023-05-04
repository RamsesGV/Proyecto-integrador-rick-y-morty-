import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites';
import Audio from './components/audio/audio';




function App() {

const [characters,setCharacter] = useState([])


const onSearchRandom = () => {
   console.log('se dio click');
   const randomId = Math.floor(Math.random() * 826); 
   axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
      .then(response => response.data)
      .then((data) => {
         if (data.id) {
            setCharacter(oldChars => [...oldChars, data]);
         } else {
            navigate('/:error');
         }
      })
      .catch(error => {
         console.log(error);
         navigate('/:error');
      });
};


const  onSearch = (id) => {
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
const PASSWORD = 'ramses123'

const login = (userData) => {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios(URL + `?email=${email}&password=${password}`)
   .then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
   });
}

const logout = () => { 
   setAccess(false)
   navigate('/')
}

useEffect(()=>{
!access && navigate('/')
},[access,navigate])







   return (
      
      <div className='App'>
      
      
      <Audio className='audio'/>
      {showNav && <Nav onSearch={onSearch} logout={logout} onSearchRandom={onSearchRandom}></Nav>  }
      <Routes>
      <Route path='/home' element={<Cards characters={characters}  onClose={onClose}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/' element={<Form login={login}/>} />
      <Route path='/:error' element={<Error/>} /> 
      <Route path='/favorites' element={<Favorites/>}/> 
      </Routes>
      
      <div className='space'></div>
      </div>
   );
}

export default App;


