import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import { addFav,removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import './Card.modules.css';

function Card({name,species,gender,image,onClose,origin,id,status,addFav,removeFav,myFavorites}) {
   const location = useLocation()

   const [isFav,setIsFav] = useState(false)
   


   const handleFavorite = () => { 
   if(isFav)  {
      setIsFav(false)
      removeFav(id)
      
   } else { 
      setIsFav(true)
      addFav({
         name,
         species,
         gender,
         image,
         onClose,
         origin,
         id,
         status,
         addFav,
         removeFav  
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
   addFav: (character) => {dispatch(addFav(character))},
   removeFav: (id) => {dispatch(removeFav(id))}
}
}

const mapStateToProps = (state) => { 
return { 
   myFavorites: state.myFavorites,
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Card);