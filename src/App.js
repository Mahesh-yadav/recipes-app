import React from 'react';
import Recipes from './components/Recipes';
import useFetch from './hooks/useFetch';
import { Switch, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

import './App.css';

const API_URI = 'http://starlord.hackerearth.com/recipe';

function App() {
  const { loading, data: recipes, error } = useFetch(API_URI);

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Recipes {...{ loading, recipes, error }} />
        </Route>
        <Route path="/:id">
          <RecipeDetails recipes={recipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
