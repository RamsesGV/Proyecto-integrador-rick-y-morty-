import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER,ORDER } from "./actions";

const initialState = { 
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
switch(action.type) { 

    case ADD_FAVORITE: 
    return{...state, 
        myFavorites:action.payload, 
        allCharacters:action.payload
    }


    case REMOVE_FAVORITE:
        return {
            ...state,
            myFavorites: action.payload,
            allCharacters: action.payload
        }

    
    case FILTER:
    const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);
    return{...state,
        myFavorites: 
        action.payload === 'allCharacters'
        ? [...state.allCharacters]
        : filteredCharacters

    }

    case ORDER: 
    const allCharactersCopy = [...state.allCharacters]
    return{
        ...state,
        myFavorites:
        action.payload === 'A'
        ? allCharactersCopy.sort((a,b) => a.id - b.id)
        : allCharactersCopy.sort((a,b) => b.id - a.id)
    }
    
    
    
    default: 
    return{...state,}
}
}

export default rootReducer; 