
import React from 'react';
import './App.css';
import PageHero from './components/PageHero';
import Search from './components/Search';
import Card from './components/Card';
import InfoCard from './components/InfoCard';
import User from './components/User';
import Followers from './components/Followers';
import Repos from './charts/Repos';


function App() {
  return (
          <div>
            <PageHero/>
            <Card>
              <Search/> 
              <InfoCard/>
              <User/>
              <Followers/>
              <Repos/>
            </Card>
            
          </div>
  );
}

export default App;
