import React from "react";
import SearchBar from "./SearchBar"; 

const Nav = () => { 
    return( 
        <div 
        className="nav" style={{
            backgroundColor: "green",
            padding: '4px',
            borderRadius:'10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' ,
            opacity:'0.6',
        
            
            
        }} 
        
        >
        <SearchBar></SearchBar>
        </div>
    )
        
    
}

export default Nav