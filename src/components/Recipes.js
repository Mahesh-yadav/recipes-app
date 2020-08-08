import React from 'react';
import Recipe from './Recipe';
import classes from '../styles/Recipes.module.css';

function Recipies({ recipes }) {
  return (
    <div className={classes.Recipes}>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default Recipies;
