import React from "react";
import pic from '../assets/pic.jpg';
import {Briefcase,GeoAltFill,Link} from 'react-bootstrap-icons'
import styles from './User.module.css';

const User=()=>{

    return <div className={styles.card}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles['header-content']}>
                    <img src={pic} alt='profile' />
                    <div className={styles.text}>
                        <span>User Name</span>
                        <span>@user name</span>
                    </div>
                </div>
                <button type="button">Follow</button>
            </div>
            <div className={styles.body}>
                <p className="description">
                    description of user
                </p>
                <div className={styles['body-content']}>
                    <div className={styles.info}>
                        <Briefcase/>
                        <span>Architect</span>
                    </div>
                    <div className={styles.info}>
                        <Briefcase/>
                        <span>Architect</span>
                    </div>
                    <div className={styles.info}>
                        <Briefcase/>
                        <span>Architect</span>
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default User;