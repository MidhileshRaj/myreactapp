import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
//import App from './App';
import Navbar from './Navbar';
import Popular from './Popular';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {PopularMovies,LatestMovies,Originals} from './Url';
import Detail from './Detail';
import './navbar.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/details/:user" element={<Detail />}></Route>

      <Route path="/popular" element={<Popular url={PopularMovies}/>} ></Route>
      <Route path="/latest" element={<Popular url={LatestMovies}/>} ></Route>
      <Route path="/comedy" element={ <Popular url={Originals}/>} ></Route>
      <Route path="/home" element={ <Home />} ></Route>

    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
