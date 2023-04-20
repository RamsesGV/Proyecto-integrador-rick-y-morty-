import './Nav.modules.css';
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, logout, onSearchRandom} ) => { 
    return( 
<div>     
    <nav className='nav'>



        <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom}></SearchBar>
        


        <button className='about'>
            <NavLink to='/about' className='linka'>About</NavLink>
        </button>



        <button className='home'>
            <NavLink to='/home' className='linkh'>Home</NavLink>
        </button>

        <button className='favorites'>
            <NavLink to='/favorites' className='linkf'>Favorites</NavLink>
        </button>



        <button onClick={logout} className='logout'>log Out</button>
    </nav>



        
</div> 
    )
        
    
}

export default Nav