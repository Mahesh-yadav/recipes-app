import React from 'react';
import classes from '../styles/Recipe.module.css';

function Recipe({ recipe }) {
  return (
    <div
      className={`${classes.Recipe} ${
        recipe.id % 2 === 0 ? classes.ThemeBlack : classes.ThemeWhite
      }`}
    >
      <img src={recipe.image} alt={recipe.name} className={classes.RecipeImg} />
      <div className={classes.RecipeOverlay}>
        <h3 className={classes.RecipeCategory}>{`In ${recipe.category}`}</h3>
        <div className={classes.RecipeDetails}>
          <div className={classes.RecipeDetailsTop}>
            <div>
              <h2 className={classes.RecipeName}>{recipe.name}</h2>
              <div className={classes.RecipeDuration}>
                <i className="far fa-clock fa-2x"></i>
                <span>24 mins</span>
              </div>
            </div>
            <i
              className={`${
                recipe.id % 3 === 1
                  ? `fas fa-heart fa-2x ${classes.Red}`
                  : 'far fa-heart fa-2x'
              }`}
            ></i>
          </div>
          <p className={classes.RecipeDesc}>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
