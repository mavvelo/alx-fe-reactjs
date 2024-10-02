import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`data.json?id=${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data[0]))
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="shadow rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol>
            {recipe.instructions.map(instruction => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;