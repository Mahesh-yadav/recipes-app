import React from 'react';
import Recipes from './components/Recipes';
import './App.css';
// import recipesData from './data.json';

const data = [
  {
    id: 0,
    name: 'Uthappizza',
    image: 'https://i.imgur.com/tDnjTXf.jpg',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam (pancake) and Italian pizza',
  },
  {
    id: 1,
    name: 'Uthappizza',
    image: 'https://i.imgur.com/tDnjTXf.jpg',
    category: 'mains',
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam (pancake) and Italian pizza',
  },
];

function App() {
  return (
    <div>
      <Recipes recipes={data} />
    </div>
  );
}

export default App;
