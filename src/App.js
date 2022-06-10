
import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import PageHero from './components/PageHero';
import Card from './components/Card';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Error from './pages/Error';

function App() {
  
  return (
          <Routes>
            
            <Route exact element={<Login/>} path='/login'/>
            <Route exact element={<SignUp/>} path='/signup'/>
            <Route exact element={<Card/>} path='/'/>
            <Route exact element={<Error/>} path='/error'/>
          </Routes>
  );
}

export default App;
