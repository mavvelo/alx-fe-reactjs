import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate and useParams for routing

const EditRecipeForm = () => {
  const { recipeId } = useParams(); // Get recipe ID from route parameter
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const [title, setTitle] = useState(recipe.title || ''); // Pre-fill form with existing values
  const [description, setDescription] = useState(recipe.description || '');
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const [instructions, setInstructions] = useState(recipe.instructions || []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { id: recipeId, title, description, ingredients, instructions };
    useRecipeStore(state => ({ updateRecipe: updatedRecipe })); // Update recipe in store
    navigate('/'); // Navigate back to home page after edit
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleRemoveInstruction = (index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions.splice(index, 1);
    setInstructions(updatedInstructions);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <h3>Ingredients</h3>
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder="Ingredient"
          />
          <button type="button" onClick={() => handleRemoveIngredient(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
      <h3>Instructions</h3>
      {instructions.map((instruction, index) => (
        <div key={index}>
          <textarea
            value={instruction}
            onChange={(e) => handleInstructionChange(index, e.target.value)}
            placeholder="Instruction"
          />
          <button type="button" onClick={() => handleRemoveInstruction(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddInstruction}>Add Instruction</button>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;