import styles from './Search.module.css'
import React, { useRef } from 'react';
import { useUserContext } from '../context/context';

const Search=()=>{
    const {searchUser,getRepos}=useUserContext();
    const input=useRef('');
    const getUser=()=>{
        const searchInput=input.current.value;
        searchUser(searchInput);
        getRepos(searchInput)
    }
    return <div className={styles.container}>
        <div className={styles.search}>
            <input ref={input} type="search" placeholder='Enter Github User'/>
            <button onClick={getUser} type='button'>Search</button>
        </div>
    </div>
}

export default Search;