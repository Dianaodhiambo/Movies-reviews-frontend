import React from 'react'
import { NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navlinks">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/createaccount">CreateAccount</NavLink> 
            </div>
            <form>
                <div className="search-btn">
                    <input type="text" placeholder="Enter Movie Name" className="inputText"></input>
                    <button><FaSearch/></button>

                </div>
            </form>
        </div>
      
    </>
  )
}

export default Navbar