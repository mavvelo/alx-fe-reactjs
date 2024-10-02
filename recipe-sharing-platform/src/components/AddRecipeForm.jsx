import React, { useState } from 'react';

function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform validation here
      const newErrors = {};
      if (!title) {
        newErrors.title = 'Title is required';
      }
      if (!ingredients) {
        newErrors.ingredients = 'Ingredients are required';
      }
      if (!instructions) {
        newErrors.instructions = 'Instructions are required';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
  
      // Submit the form data here (e.g., send it to a server)
      console.log('Form submitted:', { title, ingredients, instructions });
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input type="text" id="title" className="w-full border rounded-lg px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
          <textarea id="ingredients" className="w-full border rounded-lg px-3 py-2" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
          {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">Instructions</label>
          <textarea id="instructions" className="w-full border rounded-lg px-3 py-2" value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
          {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
      </form>
    );
  }
  
  export default AddRecipeForm;