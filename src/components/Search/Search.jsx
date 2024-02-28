import React from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const Search = ({ placeholder }) => {
    return ( <
        div className = { styles.wrapper } >
        <
        input className = { styles.search }
        placeholder = { placeholder }
        /> <
        button className = { styles.searchButton }
        type = "submit" >
        <
        SearchIcon / >
        <
        /button> <
        /div>
    );
};

export default Search;