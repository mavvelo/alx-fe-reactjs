import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams for routing
import EditRecipeForm from './EditRecipeForm'; // Import EditRecipeForm
import DeleteRecipeButton from './DeleteRecipeButton'; // Import DeleteRecipeButton

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get recipe ID from route parameter

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Additional recipe details (ingredients, instructions, etc.) */}

      <Link to={`/edit-recipe/${recipeId}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipeId} />  {/* Pass recipeId to DeleteRecipeButton */}
    </div>
  );
};

export default RecipeDetails;