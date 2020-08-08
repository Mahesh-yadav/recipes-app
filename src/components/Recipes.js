import React from 'react';
import Recipe from './Recipe';
import classes from '../styles/Recipes.module.css';

function Recipes({ recipes, loading, error }) {
  let renderedOuput = null;

  if (loading) {
    renderedOuput = <p>Loading...</p>;
  } else if (error) {
    renderedOuput = <p>Error fetching recipies</p>;
  } else if (recipes) {
    renderedOuput = (
      <div className={classes.Recipes}>
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    );
  }

  return renderedOuput;
}

export default Recipes;
