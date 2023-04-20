import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import { addFavorite,removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import './Card.modules.css';

function Card({name,species,gender,image,onClose,origin,id,status,addFavorite,removeFavorite,myFavorites}) {
   const location = useLocation()

   const [isFav,setIsFav] = useState(false)
   


   const handleFavorite = () => { 
   if(isFav)  {
      setIsFav(false)
      removeFavorite(id)
      
   } else { 
      setIsFav(true)
      addFavorite({
         name,
         species,
         gender,
         image,
         onClose,
         origin,
         id,
         status,
         addFavorite,
         removeFavorite  
      })
   }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);



   
   return (
      <div className="cardContainer">
      {
         isFav 
         ? (
            <button className="favButton" onClick={handleFavorite}>❤️</button>
         ) : (
            <button className="favButton2" onClick={handleFavorite}>🤍</button>
         )
} 
{
         location.pathname !== '/favorites' &&
         <button className="xbutton" onClick={() => onClose(id)}>X</button>
}         
         
         
         <h2 className="nameD">Name: {name}</h2>
         

         <h2 className="id">ID: {id}</h2>

         <NavLink style={{textDecoration:'none'}} to={`/detail/${id}`}>
         <img src={image} alt={'Character'} /> 
         </NavLink>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => { 
return{
   addFavorite: (character) => {dispatch(addFavorite(character))},
   removeFavorite: (id) => {dispatch(removeFavorite(id))}
}
}

const mapStateToProps = (state) => { 
return { 
   myFavorites: state.myFavorites,
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Card);