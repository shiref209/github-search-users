import React from "react";
import pic from '../assets/pic.jpg';
import {Briefcase,GeoAltFill,Link} from 'react-bootstrap-icons'
import styles from './User.module.css';
import { useUserContext } from "../context/context";

const User=()=>{
    const data=useUserContext();
    
    const {bio,name,twitter,location,company,link,image,user_url,userFound}=data;
    return <div className={styles.card}>
        {userFound ? 
        
        <div className={styles.container}>
             <div className={styles.header}>
                <div className={styles['header-content']}>
                    <img src={image? image:pic} alt='profile' />
                    <div className={styles.text}>
                        <span>{name}</span>
                        <span>{twitter?`@${twitter}`:''}</span>
                    </div>
                </div>
                
                    {user_url? <a href={user_url}>
                    <button type="button">Follow</button>
                    </a> :null}
                    
                
            </div>
            <div className={styles.body}>
                <p className="description">
                    {bio? bio:''}
                </p>
                <div className={styles['body-content']}>
                    {company?<div className={styles.info}>
                        <Briefcase/>
                        <span>{company}</span>
                    </div>:''}
                    {location? <div className={styles.info}>
                        <GeoAltFill/>
                        <span>{location}</span>
                    </div>:''}
                    {link?<div className={styles.info}>
                        <Link/>
                        <span>{link}</span>
                    </div>:''}
                </div>
            </div>
        </div> 
        
        :
        <p className={styles.error}>User Not Found, please check your Search...</p> }
</div>
}

export default User;