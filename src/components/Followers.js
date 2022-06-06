import React from "react";
import styles from './Followers.module.css'
import pic from '../assets/pic.jpg';
import { useUserContext } from "../context/context";
import { useEffect } from "react";

const Followers=()=>{
    const data=useUserContext();
    const {followersList,getFollowers,login}=data;
    useEffect(()=>{
        getFollowers(login);
    },[login])
    return <div className={styles.container}>
        <div className={styles.list}>
        {followersList.length>0 ?followersList.map((follower,index)=>{
            const {image,name,link}=follower;
            return <li key={index} className={styles.user}>
                    <img src={image} alt="user" />
                    <div className={styles.text}>
                        <span>{name}</span>
                        <a href={link}>{link}</a>
                    </div>
            </li>
}):
        <p className={styles.error}>No Followers Found...</p>}
    </div>
    </div>
}
export default Followers;