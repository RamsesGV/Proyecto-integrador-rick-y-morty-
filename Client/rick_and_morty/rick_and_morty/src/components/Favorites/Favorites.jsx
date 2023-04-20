import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { orderCards, filterCards} from "../../redux/actions";
import { useState } from "react";
import './Favorites.modules.css'

const Favorites = () => { 
const dispatch = useDispatch()
const [aux,setAux] = useState(false)


    const handleOrder = (event) => { 
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => { 
        dispatch(filterCards(event.target.value))
        setAux(aux)
    }

    


    const favorites = useSelector(state=>state.myFavorites)
    return(
        <>
        <div className="select-container">
                <select className="select1" onChange={handleOrder}>
                    <option value="none">----</option>
                    <option value={'A'}>Ascendente</option>
                    <option value={'D'}>Descendente</option>
                </select>
                <select className="select2" onChange={handleFilter}>
                    <option value="none">----</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value='allCharacters'>All Characters</option>
                    
                </select>
        </div>
            {
                favorites.map(({name,species,gender,image,origin,id,status}) => { 
                    return( 
                        <Card 
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin}
                        status={status}
                        
                        />
                    ) 
                })
            }
        
                

            




</>
    )
}

export default Favorites;