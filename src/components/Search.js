import styles from './Search.module.css'
import React from 'react';

const Search=()=>{

    return <div className={styles.container}>
        <div className={styles.search}>
            <input type="search" placeholder='Enter Github User'/>
            <button type='button'>Search</button>
        </div>
        <p>Requests 56/60</p>
    </div>
}

export default Search;