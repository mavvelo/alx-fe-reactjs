import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link for routing

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore(); // Use filteredRecipes

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.map(recipe => ( // Map over filteredRecipes
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Add other recipe details as needed */}
          <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;