import React from "react";
import { NavLink } from "react-router-dom";
export default function Card({name,species,gender,image,onClose,origin,id,status}) {
   return (
      <div>
         
         <button onClick={() => onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}> 
         <h2>Name: {name}</h2>
         </NavLink>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <h2>Status: {status}</h2>
         <h2>ID: {id}</h2>
         <img src={image} alt={'Character'} /> 
         
      </div>
   );
}

