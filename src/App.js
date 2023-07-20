import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import Popular from './Popular';
import Home from './Home';
import {PopularMovies,LatestMovies,Originals} from './Url';
import Detail from './Detail';
import './navbar.css'
const movieContext = createContext();
const hideContext= createContext();

function App() {
  const [movieurl,setMovieurl] = useState([]);
  const [hide, setHide] = useState(true);

  return (
    <hideContext.Provider value={[hide,setHide]}>
     <movieContext.Provider value={[movieurl,setMovieurl]}>
    
    <BrowserRouter>
    {hide ? <Navbar /> : null}
    <Home />
    <Routes>
      <Route path="/details/:user" element={<Detail />}></Route>
      <Route path="/popular" element={<Popular url={PopularMovies}/>} ></Route>
      <Route path="/latest" element={<Popular url={LatestMovies}/>} ></Route>
      <Route path="/comedy" element={ <Popular url={Originals}/>} ></Route>
      <Route path="/home" element={ <Home />} ></Route>
    </Routes>

    </BrowserRouter>
    </movieContext.Provider>
    </hideContext.Provider>
  
);
  }

export default App;
export {movieContext,hideContext}
