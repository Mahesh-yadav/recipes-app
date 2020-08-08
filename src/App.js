import React, { useState } from 'react';
import Recipes from './components/Recipes';
import useFetch from './hooks/useFetch';
import { Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

import './App.css';

const API_URI = 'http://starlord.hackerearth.com/recipe';

function App() {
  const { loading, data: recipes, error } = useFetch(API_URI);
  const [favorites, setFavorites] = useState(getFavorites());

  function getFavorites() {
    let favorites = [];

    const favs = localStorage.getItem('favoriteRecipes');
    if (favs) {
      favorites = JSON.parse(favs);
    }

    return favorites;
  }

  function updateFavorites(data) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(data));
    setFavorites(data);
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Recipes {...{ loading, recipes, error, favorites }} />
        </Route>
        <Route path="/:id">
          <RecipeDetails {...{ recipes, favorites, updateFavorites }} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
