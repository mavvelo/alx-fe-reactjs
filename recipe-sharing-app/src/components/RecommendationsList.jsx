import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link for routing

const RecommendationsList = () => {
  const { recommendations, recipes } = useRecipeStore();

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Try adding some favorites!</p>
      )}
    </div>
  );
};

export default RecommendationsList;