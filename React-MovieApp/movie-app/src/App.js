import React from 'react'
import Home from './Home.js';
import SingleMovie from './SingleMovie.js';
import Error from './Error.js';

import { Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <>
    
     <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='movie/:id' element={<SingleMovie /> }/>
      <Route path='*' element={ <Error />} />    
    </Routes>
    
    </>
  )
}

export default App