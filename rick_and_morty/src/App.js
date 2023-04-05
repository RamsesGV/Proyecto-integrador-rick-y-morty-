import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

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
         window.alert('There are no characters with that ID');
      }
   });
}

const onClose = (id) => { 
   const characterFiltered = characters.filter(character => 
      character.id !== parseInt(id))
      console.log(characterFiltered);
      setCharacter(characterFiltered)
}
const location = useLocation()
const showNav = location.pathname !== '/';



   return (
      <div className='App'>
      {showNav && <Nav onSearch={onSearch}></Nav>  }
      <Routes>
      <Route path='/home' element={<Cards characters={characters}  onClose={onClose}/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/' element={<Form/>} />
      </Routes>
      </div>
   );
}

export default App;


