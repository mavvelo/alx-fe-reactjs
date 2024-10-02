import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link for routing

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();

  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))
      ) : (
        <p>You don't have any favorites yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;