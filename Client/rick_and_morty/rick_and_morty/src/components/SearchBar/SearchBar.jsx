import { useState } from "react";
import './SearchBar.modules.css'

export default function SearchBar({onSearch,onSearchRandom }) {

   let [id,setId] = useState('')

   const handleChange = (event) => { 
      setId(event.target.value)
   }

   return (
      <div>
         <input  type='search' placeholder="introduce ID" className="inputS" onChange={handleChange} value={id} />
         <button className="buttonS" onClick={() =>{onSearch(id); setId('')}}>Search</button> 
         <button className="buttonR" onClick={() => {onSearchRandom()}}>Search Random</button>
      </div>
   );
}
