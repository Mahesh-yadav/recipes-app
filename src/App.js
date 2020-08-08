import React from 'react';
import Recipes from './components/Recipes';
import useFetch from './hooks/useFetch';

import './App.css';

const API_URI = 'http://starlord.hackerearth.com/recipe';

function App() {
  const { loading, data: recipes, error } = useFetch(API_URI);

  return (
    <div>
      <Recipes {...{ loading, recipes, error }} />
    </div>
  );
}

export default App;
