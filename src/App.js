import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css'
import MovieList from './Components/MovieList'
import Home from './Components/Home'
import CreateAccount from './Components/CreateAccount'
import Reviews from './Components/Reviews'

const App = () => {
  return (
   <div>
    
    <Navbar/>
      <Routes>
         <Route exact path = '/home' element={<Home/>}/>
          <Route exact path='/reviews' element={<Reviews/>}/>
          <Route exact path='/movieslist' element={<MovieList/>}/>
          <Route exact path='/createaccount' element={<CreateAccount/>}/>
       </Routes>
    </div>
 
  )
}

export default App
