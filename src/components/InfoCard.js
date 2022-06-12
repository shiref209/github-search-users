import React from "react";
import styles from './InfoCard.module.css'
import {JournalCode,PeopleFill,PersonCheckFill,CodeSquare}from 'react-bootstrap-icons'
import { useUserContext } from "../context/context";

const InfoCard=()=>{
    const data=useUserContext();
    const {followers,following,gists,repos}=data;

    return <div className={styles.container}>
        <div className={`${styles.card} ${styles.pink}`}>
            <div className={styles.icon}>
                <JournalCode />
            </div>
            <div className={styles.text}>
                <span>Repos</span>
                <span>{repos}</span>
            </div>
        </div>
         
        <div className={`${styles.card} ${styles.purple}`}>
            <div className={styles.icon}>
                <PeopleFill />
            </div>
            <div className={styles.text}>
                <span>Followers</span>
                <span>{followers}</span>
            </div>
        </div>

        <div className={`${styles.card} ${styles.pink}`}>
            <div className={styles.icon}>
                <PersonCheckFill />
            </div>
            <div className={styles.text}>
                <span>Following</span>
                <span>{following}</span>
            </div>
        </div>

        <div className={`${styles.card} ${styles.purple}`}>
            <div className={styles.icon}>
                <CodeSquare />
            </div>
            <div className={styles.text}>
                <span>Gists</span>
                <span>{gists}</span>
            </div>
        </div>
    </div>
}

export default InfoCard;