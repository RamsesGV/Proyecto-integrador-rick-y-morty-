import axios from "axios";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'


export const addFav = (character) => {
  // return { type: ADD_FAV, payload: character }
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character)
     .then(({ data }) => {
          return dispatch({
              type: ADD_FAVORITE,
              payload: data,
        });
     });
  };
};


export const removeFav = (id) => {
  // return { type: REMOVE_FAV, payload: id }
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
      axios.delete(endpoint)
      .then(({ data }) => {
          return dispatch({
              type: REMOVE_FAVORITE,
              payload: data,
          });
      });
  };
}

export const filterCards = (gender) => { 
    return{type: FILTER, payload:gender}
    
}

export const orderCards = (order) => { 
return{type:ORDER, payload:order}
}