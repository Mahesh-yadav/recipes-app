import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import classes from '../styles/RecipeDetails.module.css';

function RecipeDetails({ recipes = [], favorites, updateFavorites }) {
  const { id } = useParams();
  const history = useHistory();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return null;

  // Since recipe data is incomplete setting star count
  const stars = (recipe.id % 5) + 1;

  const getStars = (number) => {
    return [...Array(number)].map((num, index) => (
      <i key={index} className="fas fa-star"></i>
    ));
  };

  const toggleFavorites = () => {
    if (favorites.includes(recipe.id)) {
      updateFavorites(favorites.filter((f) => f !== recipe.id));
    } else {
      updateFavorites(favorites.concat(recipe.id));
    }
  };

  return (
    <div className={classes.RecipeDetails}>
      <button className={classes.BtnBack} onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left"></i>
        <span>Go Back</span>
      </button>
      <div className={classes.Recipe}>
        <div className={classes.SectionOne}>
          <div className={classes.RecipeImg}>
            <img src={recipe.image} alt={recipe.name} />
            <div className={classes.RecipeImgOverlay}>
              <i className="fas fa-play-circle fa-3x"></i>
              <span>Play Video</span>
            </div>
          </div>
          <div className={classes.Ingredients}>
            <h2>Ingredients: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              ipsa, animi odit rerum ullam ea consequuntur delectus vel unde
              quasi amet repellendus temporibus ad doloribus id distinctio
              minima? Cupiditate eveniet numquam beatae distinctio quis,
              sapiente voluptas minus rerum dignissimos asperiores maxime
              nesciunt debitis aspernatur eos quidem dolorum commodi ducimus.
              Incidunt facere nam nihil exercitationem vero facilis nisi!
              Eligendi delectus, excepturi veritatis odio, corrupti alias iusto
              dignissimos perspiciatis obcaecati, ducimus error.
            </p>
          </div>
          <div className={classes.Instructions}>
            <h2>How to prepare: </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              commodi explicabo quidem corporis reprehenderit placeat, accusamus
              iste fugit veritatis quam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              error voluptatum modi ipsa quaerat dolorum tempore facilis dolorem
              unde! Quibusdam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et
              perspiciatis quasi totam mollitia facere, laboriosam architecto
              praesentium obcaecati voluptatum necessitatibus rem atque,
              assumenda repudiandae eligendi esse aliquam saepe? Aut et possimus
              eius nemo quasi!
            </p>
          </div>
        </div>
        <div className={classes.SectionTwo}>
          <h3 className={classes.Heading}>RECIPE</h3>
          <h1 className={classes.RecipeName}>{recipe.name}</h1>
          <div className={classes.Stars}>
            <span className={classes.StarCount}>{`${stars} / 5`}</span>
            {getStars(stars)}
          </div>
          <h3 className={classes.Heading}>DESCRIPTION</h3>
          <p className={classes.RecipeDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus, officia, perspiciatis laborum cupiditate error
            aliquid iusto excepturi consequuntur fugit voluptates quae
            architecto ipsa, explicabo ut deleniti expedita quibusdam sed eaque
            voluptatibus odio? Quam, debitis ex cumque hic sequi, harum autem
            voluptatem adipisci inventore ipsa ipsum libero esse necessitatibus
            nisi molestias consequatur ad est, cupiditate quos magnam labore
            quae! Fuga consequatur, facere ducimus incidunt nostrum perspiciatis
            nihil explicabo tempore blanditiis harum. Aspernatur facilis
            obcaecati veniam laborum voluptatum est quos alias eum.
          </p>
          <div className={classes.Circles}>
            <div className={classes.Circle}>
              <span className={classes.Number}>8</span>
              <span>ingredients</span>
            </div>
            <div className={classes.Circle}>
              <span className={classes.Number}>220</span>
              <span>bucks</span>
            </div>
            <div className={classes.Circle}>
              <span className={classes.Number}>25</span>
              <span>minutes</span>
            </div>
          </div>
          <div className={classes.Favorite}>
            <p>
              {favorites.includes(recipe.id)
                ? 'Remove from favorites'
                : 'Favorite This recipe'}
            </p>
            <i
              onClick={toggleFavorites}
              className={`${
                favorites.includes(recipe.id)
                  ? `fas fa-heart fa-2x ${classes.Red}`
                  : 'far fa-heart fa-2x'
              }`}
            ></i>
          </div>
          <div className={classes.AddComment}>
            <h3>Add Comment</h3>
            <textarea placeholder="Type something here..."></textarea>
            <button>Add comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
