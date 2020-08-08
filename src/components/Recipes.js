import React from 'react';
import Recipe from './Recipe';
import classes from '../styles/Recipes.module.css';
import Loading from './Loading';

function Recipes({ recipes, loading, error, favorites }) {
  let renderedOuput = null;

  if (loading) {
    renderedOuput = <Loading />;
  } else if (error) {
    renderedOuput = <p>Error fetching recipies</p>;
  } else if (recipes) {
    renderedOuput = (
      <div className={classes.Recipes}>
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} favorites={favorites} key={recipe.id} />
        ))}
      </div>
    );
  }

  return renderedOuput;
}

export default Recipes;
