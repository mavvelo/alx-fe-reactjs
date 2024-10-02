import React, { useState } from 'react';

function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (example: check for empty title and description)
    if (!title || !description) {
      alert('Please fill in all required fields!');
      return;
    }

    addRecipe({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <div>
        <label>Recipe Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Recipe Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      {/* Add more input fields for additional recipe data if needed */}
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;