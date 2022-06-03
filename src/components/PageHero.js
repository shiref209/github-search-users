import React from 'react';
import styles from './PageHero.module.css';
import pic from '../assets/pic.jpg'


const PageHero=()=>{

    return <div className={styles.page}>
        <img src={pic} alt="profile" />
            <p>Welcome user </p>
            <button type='button'>LogOut</button>
    </div>
}

export default PageHero