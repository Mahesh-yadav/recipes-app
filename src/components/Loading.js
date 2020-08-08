import React from 'react';
import classes from '../styles/Loading.module.css';

function Loading() {
  return (
    <div className={classes.Loading}>
      <i className={`${classes.LoadingIcon} fas fa-globe-asia`}></i>
      <span className={classes.LoadingText}>Loading Recipies ...</span>
    </div>
  );
}

export default Loading;
