import React from "react";
import SearchBar from "./SearchBar"; 
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, logout, onSearchRandom} ) => { 
    return( 
<div>     
    <nav>
        <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom}></SearchBar>
        


        <button>
            <NavLink to='/about'>About</NavLink>
        </button>



        <button>
            <NavLink to='/home'>Home</NavLink>
        </button>



        <button onClick={logout}>log Out</button>
    </nav>



        
</div> 
    )
        
    
}

export default Nav