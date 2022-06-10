import React from 'react';
import styles from './PageHero.module.css';
import pic from '../assets/pic.jpg';
import auth from '../auth/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const PageHero=()=>{
    const user=localStorage.getItem('user');
    const navigate=useNavigate();
    const userSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/login');
            localStorage.setItem('user','')
          }).catch((error) => {
            console.log(error)
          });
    }
    return <div className={styles.page}>
        <img src={pic} alt="profile" />
            <p>Welcome, {user} </p>
            <button type='button' onClick={userSignOut}>LogOut</button>
    </div>
}

export default PageHero