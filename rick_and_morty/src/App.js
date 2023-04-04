import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import {useState} from 'react';
import axios from 'axios';



function App() {

const [characters,setCharacter] = useState([])

const  onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then (response => response.data)
   .then((data) => {
      if (data.id) {
         setCharacter((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) => { 
   const charactersFiltered = characters.filter(character => 
      character.id !== parseInt(id))
      setCharacter(charactersFiltered)
}



   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Cards characters={characters}  onClose={onClose}/>
      
      </div>
   );
}

export default App;


