import React from "react";
import styles from './Followers.module.css'
import pic from '../assets/pic.jpg';

const Followers=()=>{

    return <div className={styles.container}>
        <div className={styles.user}>
            <img src={pic} alt="user" />
            <div className={styles.text}>
                <span>John Doe</span>
                <span>Johndoe@gmail.com</span>
            </div>
        </div>
    </div>
}
export default Followers;