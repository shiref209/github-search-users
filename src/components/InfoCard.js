import React from "react";
import styles from './InfoCard.module.css'
import {JournalCode,PeopleFill,PersonCheckFill,CodeSquare}from 'react-bootstrap-icons'

const InfoCard=()=>{

    return <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.icon}>
                <JournalCode />
            </div>
            <div className={styles.text}>
                <span>Text</span>
                <span>100</span>
            </div>
        </div>
         
        <div className={styles.card}>
            <div className={styles.icon}>
                <PeopleFill />
            </div>
            <div className={styles.text}>
                <span>Text</span>
                <span>100</span>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.icon}>
                <PersonCheckFill />
            </div>
            <div className={styles.text}>
                <span>Text</span>
                <span>100</span>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.icon}>
                <CodeSquare />
            </div>
            <div className={styles.text}>
                <span>Text</span>
                <span>100</span>
            </div>
        </div>
    </div>
}

export default InfoCard;