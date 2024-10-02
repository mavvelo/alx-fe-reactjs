import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for recipe details navigation
import useRecipeStore from './recipeStore.js'; // Import useRecipeStore for accessing the store

function RecipeList() {
  const { recipes, favorites, addToFavorites, removeFromFavorites } = useRecipeStore();

  return (
    <div>
      <h2>Recipe List</h2>

      {/* Category sections with links to individual recipes (replace placeholders with actual links) */}
      <section>
        <h3>Dinner Recipes</h3>
        <ul>
          {recipes
            .filter((recipe) => recipe.category === 'Dinner')
            .map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link> 
                <button onClick={() => addToFavorites(recipe.id)}>Add to Favorites</button>
                <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
                {favorites.includes(recipe.id) && <span>★</span>}
              </li>
            ))}
        </ul>
      </section>

      <section>
        <h3>Lunch Recipes</h3>
        <ul>
          {recipes
            .filter((recipe) => recipe.category === 'Lunch')
            .map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link> 
                <button onClick={() => addToFavorites(recipe.id)}>Add to Favorites</button>
                <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
                {favorites.includes(recipe.id) && <span>★</span>}
              </li>
            ))}
        </ul>
      </section>

      <section>
        <h3>Appetizers and Snacks</h3>
        <ul>
          {recipes
            .filter((recipe) => recipe.category === 'Appetizers & Snacks')
            .map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link> 
                <button onClick={() => addToFavorites(recipe.id)}>Add to Favorites</button>
                <button onClick={() => removeFromFavorites(recipe.id)}>Remove from Favorites</button>
                {favorites.includes(recipe.id) && <span>★</span>}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default RecipeList;