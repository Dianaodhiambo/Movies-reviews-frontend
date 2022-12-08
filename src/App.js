import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css'
import MovieList from './Components/MovieList'
import Home from './Components/Home'
import CreateAccount from './Components/CreateAccount'
import Review from './Components/Reviews'

const App = () => {
  return (
   <div>
    <Navbar/>
      <Routes>
         <Route exact path = '/home' element={<Home/>}/>
            <Route exact path='/movies' element={<MovieList/>}/>
            <Route exact path='/reviews' element={<Review />}/>
            <Route exact path='/createaccount' element={<CreateAccount/>}/>
       </Routes>
    </div>
    
        

    
    
 
  )
}

export default App
