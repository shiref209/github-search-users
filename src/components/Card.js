import React from "react";
import styles from './Card.module.css';
import Search from './Search';
import InfoCard from './InfoCard';
import User from './User'
import Followers from './Followers';
import Repos from '../charts/Repos';
import { useUserContext } from "../context/context";
import PageHero from './PageHero'

const Card=()=>{
    const {reposList}=useUserContext();
    return <div className={styles.container}>
      <PageHero/>
            <Search/> 
              <InfoCard/>
              <User/>
              <Followers/>
              {reposList.length>0 && <Repos/>}
    </div>
}

export default Card;