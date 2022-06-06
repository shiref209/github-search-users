import logo from './logo.svg';
import React from 'react';
import './App.css';
import PageHero from './components/PageHero';
import Search from './components/Search';
import Card from './components/Card';
import InfoCard from './components/InfoCard';
import User from './components/User';
import Followers from './components/Followers';
import LanguagesChart from './charts/LanguagesChart';


function App() {
  return (
          <div>
            <PageHero/>
            <Card>
              <Search/> 
              <InfoCard/>
              <User/>
              <Followers/>
              <LanguagesChart/>
            </Card>
            
          </div>
  );
}

export default App;
