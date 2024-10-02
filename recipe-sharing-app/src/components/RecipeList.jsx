import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Import Link for routing

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes); // Use filteredRecipes

  // ... rest of your code to render the list of recipes using recipes array
};