import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard.jsx';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <RecipeCard recipe={recipe} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;