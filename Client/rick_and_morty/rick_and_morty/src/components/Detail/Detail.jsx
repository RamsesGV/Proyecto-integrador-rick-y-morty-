import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './Detail.modules.css'

//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
//const API_KEY = '40985a843964.676b0d39d16108d6a9e0'


const Detail = () => { 
const { id } = useParams() 
const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
    if (data.id) {
        setCharacter(data);
    } else {
        window.alert('There are no characters with that ID');
    }
    });
    return setCharacter({});
}, [id]);
    
    
    return(
        
        <div className="detail"> 
            <h1 className="h1">{character.name}</h1>
            <img className="imgD" src={character.image} alt={character.name} />
            <p>{character.status ? `Status: ${character.status}` : null}</p>
            <p>{character.species ? `Species: ${character.species}` : null}</p>
            <p>{character.gender ? `Gender: ${character.gender}` : null}</p>
            <p>{character.origin ? `Origin: ${character.origin.name}` : null}</p>
        </div>
    )

}

export default Detail; 