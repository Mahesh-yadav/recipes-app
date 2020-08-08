import React, { useState } from 'react';
import Recipes from './components/Recipes';
import useFetch from './hooks/useFetch';
import { Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchInput from './components/SearchInput';

import './App.css';

const API_URI = 'http://starlord.hackerearth.com/recipe';

function App() {
  const { loading, data: recipes = [], error } = useFetch(API_URI);
  const [favorites, setFavorites] = useState(getFavorites());
  const [searchValue, setSearchValue] = useState('');

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

  const matchSearch = (recipe) => {
    if (searchValue === '') return true;

    return recipe.name.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <>
            <SearchInput value={searchValue} onValueChange={setSearchValue} />
            <Recipes
              {...{ loading, error, favorites }}
              recipes={recipes.filter((recipe) => matchSearch(recipe))}
            />
          </>
        </Route>
        <Route path="/:id">
          <RecipeDetails {...{ recipes, favorites, updateFavorites }} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
