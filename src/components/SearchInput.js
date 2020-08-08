import React from 'react';
import classes from '../styles/SearchInput.module.css';

function SearchInput({ value, onValueChange }) {
  return (
    <div className={classes.SearchInput}>
      <div className={classes.SearchIcon}>
        <i className="fas fa-search fa-2x"></i>
      </div>
      <input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder="Search your favorite recipe ..."
        className={classes.FormControl}
      ></input>
    </div>
  );
}

export default SearchInput;
